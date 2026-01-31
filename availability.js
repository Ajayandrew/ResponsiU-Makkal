
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


// SLOT DATA (10 places)
// ----------------------
const slotsData = [
  [{time:"9:00 AM", seats:5},{time:"12:00 PM", seats:2},{time:"4:00 PM", seats:0}],
  [{time:"8:00 AM", seats:3},{time:"11:00 AM", seats:1},{time:"5:00 PM", seats:0}],
  [{time:"7:00 AM", seats:4},{time:"10:00 AM", seats:2},{time:"3:00 PM", seats:0}],
  [{time:"10:00 AM", seats:5},{time:"1:00 PM", seats:2},{time:"5:00 PM", seats:1}],
  [{time:"9:00 AM", seats:3},{time:"12:00 PM", seats:2},{time:"4:00 PM", seats:0}],
  [{time:"8:00 AM", seats:5},{time:"11:00 AM", seats:1},{time:"3:00 PM", seats:0}],
  [{time:"9:00 AM", seats:4},{time:"1:00 PM", seats:2},{time:"4:00 PM", seats:1}],
  [{time:"7:00 AM", seats:3},{time:"10:00 AM", seats:2},{time:"2:00 PM", seats:0}],
  [{time:"9:00 AM", seats:4},{time:"12:00 PM", seats:2},{time:"3:00 PM", seats:0}],
  [{time:"5:00 AM", seats:2},{time:"7:00 AM", seats:1},{time:"9:00 AM", seats:0}]
];

// ----------------------
// GLOBAL VARIABLES
// ----------------------
let selectedPlaceIndex = null;
let selectedSlot = "";
let slotsByDate = {};
let bookings = [];

// ----------------------
// ELEMENTS
// ----------------------
const placeCards = document.querySelectorAll(".place-card");
const modal = document.getElementById("bookingModal");
const placeTitle = document.getElementById("placeTitle");
const modalGuide = document.getElementById("modalGuide");
const placePrice = document.getElementById("placePrice");
const placeRating = document.getElementById("placeRating");
const dateInput = document.getElementById("date");
const slotsDiv = document.getElementById("slots");
const guestsInput = document.getElementById("guests");
const totalSpan = document.getElementById("total");
const summaryList = document.getElementById("summaryList");

// ERRORS
const dateError = document.getElementById("dateError");
const slotError = document.getElementById("slotError");
const guestsError = document.getElementById("guestsError");
const duplicateError = document.getElementById("duplicateError");

// ----------------------
// OPEN MODAL
// ----------------------
placeCards.forEach(card => {
  card.addEventListener("click", () => {
    selectedPlaceIndex = parseInt(card.dataset.index);
    selectedSlot = "";
    resetBookingForm();

    // Fill modal info
    placeTitle.innerText = card.querySelector("h3").innerText;
    modalGuide.innerText = card.querySelector("p").innerText;
    placePrice.innerText = card.querySelector("p:nth-child(3)").innerText;
    placeRating.innerText = card.querySelector("p:nth-child(4)").innerText;
    document.getElementById("modalImage").src = card.querySelector("img").src;

    // Update total price for default guest = 1
    updatePrice();

    modal.style.display = "flex";
  });
});

// ----------------------
// CLOSE MODAL
// ----------------------
function closeModal(){ modal.style.display = "none"; }

// ----------------------
// DATE CHANGE
// ----------------------
dateInput.addEventListener("change", function() {
  const date = this.value;
  if(!slotsByDate[date]){
    slotsByDate[date] = JSON.parse(JSON.stringify(slotsData[selectedPlaceIndex]));
  }
  showSlots(date);
});

// ----------------------
// SHOW SLOTS
// ----------------------
function showSlots(date){
  slotsDiv.innerHTML = "";
  slotsByDate[date].forEach(slot=>{
    const div = document.createElement("div");
    div.className = "slot";
    if(slot.seats===0) div.classList.add("full");
    else if(slot.seats<=2) div.classList.add("few");
    else div.classList.add("available");
    div.innerText = slot.time;
    if(slot.seats>0){
      div.addEventListener("click", ()=>{
        selectedSlot = slot.time;
        document.querySelectorAll(".slot").forEach(s=>s.style.border="");
        div.style.border="2px solid #0d47a1";
      });
    }
    slotsDiv.appendChild(div);
  });
}

// ----------------------
// UPDATE PRICE
// ----------------------
guestsInput.addEventListener("input", updatePrice);
function updatePrice(){
  const guests = parseInt(guestsInput.value);
  if(selectedPlaceIndex!==null){
    const pricePerPerson = parseInt(
      placeCards[selectedPlaceIndex].querySelector("p:nth-child(3)").innerText.replace("₹","").replace("/person","")
    );
    totalSpan.innerText = guests*pricePerPerson;
  }
}

// ----------------------
// RESET FORM
// ----------------------
function resetBookingForm(){
  dateInput.value="";
  guestsInput.value=1;
  totalSpan.innerText="0";
  selectedSlot="";
  slotsDiv.innerHTML="";
  dateError.innerText="";
  slotError.innerText="";
  guestsError.innerText="";
  duplicateError.innerText="";
}

// ----------------------
// CONFIRM BOOKING
// ----------------------
function confirmBooking() {
  const date = dateInput.value;
  const guests = parseInt(guestsInput.value);

  // Reset errors
  dateError.innerText = "";
  slotError.innerText = "";
  guestsError.innerText = "";

  let hasError = false;
  if (!date) { dateError.innerText = "Please select a date"; hasError = true; }
  if (!selectedSlot) { slotError.innerText = "Please select a slot"; hasError = true; }
  if (guests < 1) { guestsError.innerText = "At least 1 guest"; hasError = true; }

  if (hasError) return;

  // Confirm booking
  const proceed = confirm(`Are you sure you want to book ${selectedSlot} for ${guests} guest(s) on ${date}?`);
  if (!proceed) return;

  // Check if already booked
  const alreadyBooked = bookings.some(b => b.place === placeTitle.innerText && b.date === date && b.slot === selectedSlot);
  if (alreadyBooked) {
    alert("You already booked this slot!");
    return;
  }

  // Reduce seats
  const slots = slotsByDate[date];
  slots.forEach(s => { 
    if (s.time === selectedSlot) s.seats -= guests; 
    if (s.seats < 0) s.seats = 0;
  });

  // Save booking with unique ID
  bookings.push({
    id: Date.now(),
    place: placeTitle.innerText,
    slot: selectedSlot,
    date: date,
    guests: guests,
    total: totalSpan.innerText,
    placeIndex: selectedPlaceIndex
  });

  // Render summary
  renderBookings();

  // Reset modal
  resetBookingForm();
  closeModal();
}

// ----------------------
// RENDER BOOKING SUMMARY
// ----------------------
function renderBookings() {
  summaryList.innerHTML = "<h2>Slot Booking Summary</h2>";

  if (bookings.length === 0) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "empty";
    emptyDiv.innerText = "No bookings yet.";
    emptyDiv.style.color="white";
    summaryList.appendChild(emptyDiv);
    return;
  }

  bookings.forEach(b => {
    const div = document.createElement("div");
    div.className = "summary-card";

    div.innerHTML = `
      <div>
        <strong>${b.place}</strong><br>
        ${b.date} | ${b.slot} | ${b.guests} Guests | Total: ₹${b.total}
      </div>
      <button class="delete-btn" data-id="${b.id}">
        <img src="./images/delete.png" alt="Delete">
      </button>
    `;

    // Delete functionality
    const deleteBtn = div.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Delete this booking?")) {
        const id = parseInt(deleteBtn.dataset.id);
        const index = bookings.findIndex(booking => booking.id === id);
        if (index > -1) {
          // Restore seats
          const bookingToDelete = bookings[index];
          const date = bookingToDelete.date;
          const placeIdx = bookingToDelete.placeIndex;
          const slots = slotsByDate[date] || JSON.parse(JSON.stringify(slotsData[placeIdx]));
          slots.forEach(s => {
            if (s.time === bookingToDelete.slot) s.seats += bookingToDelete.guests;
          });
          slotsByDate[date] = slots;

          // Remove booking
          bookings.splice(index, 1);
          renderBookings();
        }
      }
    });

    summaryList.appendChild(div);
  });
}
