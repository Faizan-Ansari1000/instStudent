// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { doc, setDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADdEh-IuWSwgZvnarWYCy6Q13GUrM5G1c",
  authDomain: "student-portal-c81d8.firebaseapp.com",
  projectId: "student-portal-c81d8",
  storageBucket: "student-portal-c81d8.appspot.com",
  messagingSenderId: "268848924458",
  appId: "1:268848924458:web:9bb78e1a5a08f0424f8053",
  measurementId: "G-560Y50KZR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

window.signUp = () => {

  let email = document.getElementById('email')
  let password = document.getElementById('password')

  let obj = {
    email: email.value,
    password: password.value,
  }
  console.log(obj);
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
      obj.id = res.user.uid;
      obj.userType = 'user';

      delete obj.password;

      const reference = doc(db, 'user', obj.id)
      setDoc(reference, obj)
        .then(() => {
          const userObj = JSON.stringify(obj)
          localStorage.setItem('user', userObj)
          window.location.replace('../login/login.html')
        })
      alert('Send (Plz Wait)')
        .catch((err) => {
          console.log(err.message);
          alert('Error')
        })
    })
    .catch((err) => {
      console.log(err.message);
      alert('Error')
    })

  if (email === ' ' || password === ' ') {
    alert('Please fill the input fields.');
    return false; // Prevent form submission
  }
  return true; // Allow form submission

}


