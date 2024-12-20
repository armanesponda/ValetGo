// Select the links and the popup container
const driverPortalLink = document.querySelector("#driverlogin-link"); // Link to DriverLogin
const userPortalLink = document.querySelector("#userlogin-link");  
const backTo = document.querySelector("#backtouserlogin-link");  
const registerPortalLink = document.querySelector("#register-link");   // Link to UserLogin
const popup = document.querySelector(".popup");

registerPortalLink.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("show-register"); // Show RegisterAccount form
});

userPortalLink.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("show-register", "show-dlogin"); // Back to UserLogin
});

driverPortalLink.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("show-dlogin"); // Show DriverLogin form
});

backTo.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("show-register", "show-dlogin");
});
