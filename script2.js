import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDA5TW4Gb5bnluvlHYXMoYu1wfhrDxnx74",
  authDomain: "valetgo-e211c.firebaseapp.com",
  projectId: "valetgo-e211c",
  storageBucket: "valetgo-e211c.firebasestorage.app",
  messagingSenderId: "272090189227",
  appId: "1:272090189227:web:1f95a416bdc83ad66996ee",
};

const authorizedDriverEmails = [
  "johndoe@gmail.com",
  "janesmith@gmail.com",
];

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth service
const auth = getAuth();

// Event listener for forgot password
document.addEventListener("DOMContentLoaded", () => {
  const forgotPasswordLink = document.getElementById("forgotPass");

  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();

    // Prompt user for their email address
    const email = prompt("Please enter your email address for password reset:");

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent! Check your inbox.");
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/user-not-found") {
            alert("No user found with this email address.");
          } else {
            alert(`Error: ${errorMessage}`);
          }
        });
    } else {
      alert("Email address is required to reset your password.");
    }
  });
});

// Event listener for login form submission
const Submit = document.getElementById("Submit");

Submit.addEventListener("click", (event) => {
  event.preventDefault();

  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;

  signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "homepage.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const driverSubmit = document.getElementById("DriverSubmit");

driverSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const driverEmail = document.getElementById("DEmail").value;
  const driverPassword = document.getElementById("DPassword").value;

  // Check if the email is in the authorized list
  if (!authorizedDriverEmails.includes(driverEmail)) {
    alert("Unauthorized access. You are not registered as a driver.");
    return;
  }

  // Proceed with Firebase authentication if the email is authorized
  signInWithEmailAndPassword(auth, driverEmail, driverPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Welcome, Driver!");
      window.location.href = "homepage.html"; // Redirect to the driver homepage
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const RegisterSubmit = document.getElementById("RegisterSubmit");

RegisterSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const REmail = document.getElementById("REmail").value;
  const RPassword = document.getElementById("RPassword").value;

  createUserWithEmailAndPassword(auth, REmail, RPassword)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account Created");
      window.location.href = "index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
