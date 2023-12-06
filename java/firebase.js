// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl3wRcoHRsrhwYY0bg7T_o8HybIt6KVdY",
  authDomain: "david123-18015.firebaseapp.com",
  projectId: "david123-18015",
  storageBucket: "david123-18015.appspot.com",
  messagingSenderId: "810229359703",
  appId: "1:810229359703:web:3f654dd0a64c87e98e2f12",
  measurementId: "G-35TRC7P2D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Conexión a Firebase establecida correctamente.");

document.addEventListener('DOMContentLoaded', function () {
  const guardarButton = document.getElementById('guardar');

  guardarButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    agregarDatos(email, password);
    
  });
});

function agregarDatos(contraseña, email) {
  addDoc(collection(db, 'Deportes'), {
    contraseña,
    email
  })
    .then(() => {
      alert('Los datos se han registrado correctamente en Firebase.');
      clearForm();
    })
    .catch((error) => {
      console.error('Error al registrar los datos en Firebase:', error);
    });
}

  