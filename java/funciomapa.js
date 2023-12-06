import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAX8IYW4d2MtoqtpB127PhWejVbw7ngKuk",
  authDomain: "mapaubi-195c7.firebaseapp.com",
  projectId: "mapaubi-195c7",
  storageBucket: "mapaubi-195c7.appspot.com",
  messagingSenderId: "797359628138",
  appId: "1:797359628138:web:86ea2ef2001d00e1158f13",
  measurementId: "G-JEVD3NJ8CF"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Conexión a Firebase establecida correctamente.");

document.addEventListener('DOMContentLoaded', function () {
  const guardarButton = document.getElementById('guardar');

  guardarButton.addEventListener('click', () => {
    const latitud = document.getElementById('Latitud').value;
    const longitud = document.getElementById('Longitud').value;

    agregarDatos(latitud, longitud);
  });
});

function agregarDatos(latitud, longitud) {
  addDoc(collection(db, 'MapaUbi'), {
    latitud,
    longitud
  })
    .then(() => {
      alert('Los datos se han registrado correctamente en Firebase.');
      clearForm();
    })
    .catch((error) => {
      console.error('Error al registrar los datos en Firebase:', error);
    });
}