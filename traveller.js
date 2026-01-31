const contactperson = document.getElementById("contactperson");
const phoneInput = document.getElementById("contactdetail"); 
const pickupLocation = document.getElementById("pickupLocation");
const submit = document.getElementById("btn");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    let nameError = document.getElementById("nameError");
    let phoneError = document.getElementById("phoneError"); 
    let pickupError = document.getElementById("pickupError");

    

    if (!nameRegex.test(contactperson.value.trim())) {
        nameError.style.display = "inline";
    } else {
        nameError.style.display = "none";
    }

    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.style.display = "inline";
    } else {
        phoneError.style.display = "none";
    }

    if (pickupLocation.value.trim() === "") {
        pickupError.style.display = "block";
        pickupLocation.classList.add("border-red-500");
    } else {
        pickupError.style.display = "none";
        pickupLocation.classList.remove("border-red-500");
    }
    
});
