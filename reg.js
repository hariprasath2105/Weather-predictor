import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPLfGMkOtmH5WbYSCLgKLeM_25UROFK-w",
    authDomain: "weatherlogin-9a96a.firebaseapp.com",
    projectId: "weatherlogin-9a96a",
    storageBucket: "weatherlogin-9a96a.appspot.com",
    messagingSenderId: "434869547778",
    appId: "1:434869547778:web:b2fbb9a6b776e35cbe881b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "/weather.html"; // Redirect to weather page
        })
        .catch((error) => {
            alert(`Login Error: ${error.message}`);
        });
});

document.getElementById('reset-password').addEventListener("click", function () {
    const email = prompt("Enter your email to reset password:");
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent!");
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    }
});
