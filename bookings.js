const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });


  const links = document.querySelectorAll(".nav-menu a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  
// Automatically reset localStorage for demo
localStorage.removeItem("bookings");

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// Demo data
if (bookings.length === 0) {
  bookings = [
    {
      id: "1",  
      activity: "Paris City Tour",
      date: "2026-02-10",
      Slots: "10:00 AM",
      travellers: 2,  
      price: 1000,
      status: "Confirmed",
      createdAt: Date.now(),
      image: "images/paris.jpg",
      guide: { name: "Alice", contact: "alice@example.com" },
      extras: ["Lunch included", "Museum tickets"]
    },
    {
      id: "2",
      activity: "Rome Colosseum Visit",
      date: "2026-01-20",
      Slots: "2:00 PM",
      travellers: 1,
      price: 799,
      status: "Completed",
      createdAt: Date.now() - 200000,
      guide: { name: "Marco", contact: "marco@example.com" },
      extras: ["Audio guide"]
    },
    {
      id: "3",
      activity: "London Eye Experience",
      date: "2026-03-15",
      Slots: "11:00 AM",
      travellers: 3,
      price: 3000,
      status: "Waiting",
      createdAt: Date.now() - 50000,
      guide: { name: "Emma", contact: " emma@example.com" },
      extras: ["VIP access", "Photo package"]
    }
  ];
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

const container = document.getElementById("bookingsContainer");
const summary = document.getElementById("summary");
const emptyState = document.getElementById("emptyState");
const filterSelect = document.getElementById("filterSelect");
const sortSelect = document.getElementById("sortSelect");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const exportBtn = document.getElementById("exportBtn");

// Update Confirmed → Completed if date passed
function updateStatus(booking) {
  const today = new Date().toISOString().split("T")[0];
  if (booking.status === "Confirmed" && booking.date < today) {
    booking.status = "Completed";
  }
}

function renderSummary() {
  summary.innerHTML = `
    <div>Total: ${bookings.length}</div>
    <div>Confirmed: ${bookings.filter(b => b.status === "Confirmed").length}</div>
    <div>Completed: ${bookings.filter(b => b.status === "Completed").length}</div>
    <div>Waiting: ${bookings.filter(b => b.status === "Waiting").length}</div>
  `;
}

function renderBookings(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  list.forEach(b => {
    updateStatus(b);

    let progressWidth;
    switch(b.status) {
      case "Waiting": progressWidth = "30%"; break;
      case "Confirmed": progressWidth = "60%"; break;
      case "Completed": progressWidth = "100%"; break;
      default: progressWidth = "0%";
    }

    const card = document.createElement("div");
    card.className = "booking-card";

    card.innerHTML = `
      <span class="badge ${b.status}">${b.status}</span>
      <h3>${b.activity}</h3>
      <p><strong>ID:</strong> ${b.id}</p>
      <p>${b.date} • ${b.Slots}</p>
      <p>${b.travellers} travellers (₹${b.price / b.travellers} each)</p>

      <div class="progress">
        <span style="width:${progressWidth}"></span>
      </div>

      <div class="card-actions">
        <button class="details-btn" onclick="viewDetails('${b.id}')">View</button>
        <button class="cancel-btn" ${b.status !== "Confirmed" ? "disabled" : ""} onclick="cancelBooking('${b.id}')">
          Cancel
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  localStorage.setItem("bookings", JSON.stringify(bookings));
}

function cancelBooking(id) {
  if (!confirm("Cancel this booking?")) return;
  bookings = bookings.map(b => b.id === id ? {...b, status: "Cancelled"} : b);
  renderSummary();
  applyFilters();
}

function viewDetails(id) {
  const b = bookings.find(b => b.id === id);

  modalBody.innerHTML = `
    <h3>${b.activity}</h3>
    <p><strong>Booking ID:</strong> ${b.id}</p>
    <p>Date: ${b.date}</p>
    <p>Slots: ${b.Slots}</p>
    <p>Status: ${b.status}</p>
    <p>Travellers: ${b.travellers}</p>
    <p>Total Paid: ₹${b.price}</p>
    <hr>
    <h4>Guide Details</h4>
    <p>Name: ${b.guide?.name || "N/A"}</p>
    <p>Contact: ${b.guide?.contact || "N/A"}</p>
    <hr>
    <h4>Extras</h4>
    <ul>
      ${b.extras?.map(e => `<li>${e}</li>`).join("") || "<li>None</li>"}
    </ul>
  `;

  modal.style.display = "block";
}

closeModal.onclick = () => modal.style.display = "none";

function applyFilters() {
  let filtered = [...bookings];

  if (filterSelect.value !== "all") {
    filtered = filtered.filter(b => b.status === filterSelect.value);
  }

  filtered.sort((a, b) =>
    sortSelect.value === "newest"
      ? b.createdAt - a.createdAt
      : a.createdAt - b.createdAt
  );

  renderBookings(filtered);
}



filterSelect.onchange = applyFilters;
sortSelect.onchange = applyFilters;

exportBtn.onclick = () => {
  const blob = new Blob([JSON.stringify(bookings, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "my-bookings.json";
  link.click();
};

renderSummary();
applyFilters();
