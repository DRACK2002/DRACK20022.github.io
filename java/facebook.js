  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth, signInWithPopup,FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAE5p4oleRRMa_NF7ic35JkSsPIEGhVvPk",
    authDomain: "fir-class-34c4f.firebaseapp.com",
    projectId: "fir-class-34c4f",
    storageBucket: "fir-class-34c4f.appspot.com",
    messagingSenderId: "265650373337",
    appId: "1:265650373337:web:b428aba35ddfd910e034c8",
    measurementId: "G-KWVEP447M5"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const provider = new FacebookAuthProvider();
      document.getElementById('facebook').addEventListener('click', () => {
      
const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
   // const user = result.user;
    window.location.href = "index.html";
    console.log("Conexión exitosa");
  })
  .catch((error) => {
    if (error.code === "auth/popup-closed-by-user") {
        console.log("El usuario cerró la ventana emergente de inicio de sesión.");
        // Puedes mostrar un mensaje al usuario para informar que el proceso de inicio de sesión se canceló.
    } else {
        console.log("Ocurrió un error durante la autenticación.");
        console.error(error);
        // Manejar otros errores aquí.
    }
    

      });
      });