// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// DARK MODE
const darkBtn = document.getElementById("darkToggle");
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// BOOKING POPUP
const openBooking = document.getElementById("openBooking");
const closeBooking = document.getElementById("closeBooking");
const bookingPopup = document.getElementById("bookingPopup");

openBooking.onclick = () => bookingPopup.style.display = "flex";
closeBooking.onclick = () => bookingPopup.style.display = "none";

window.onclick = e => {
    if (e.target === bookingPopup) bookingPopup.style.display = "none";
};

// FORM SUBMIT
document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Appointment Booked Successfully!");
    bookingPopup.style.display = "none";
    this.reset();
});

// SCROLL TO TOP
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollTop.classList.add("show");
    else scrollTop.classList.remove("show");
});

scrollTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
