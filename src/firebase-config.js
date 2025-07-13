// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDWWyRfSeP3A_vmBtFKMcCJKL72wsktac',
  authDomain: 'portfolioger-ab161.firebaseapp.com',
  projectId: 'portfolioger-ab161',
  storageBucket: 'portfolioger-ab161.firebasestorage.app',
  messagingSenderId: '398757948419',
  appId: '1:398757948419:web:0d55d708d8641a16f9b236',
  measurementId: 'G-KJ3M3YD667',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Opcional: Si vas a usar otros servicios de Firebase como Firestore o Authentication
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// export const db = getFirestore(app);
// export const auth = getAuth(app);

// Exporta 'app' y 'analytics' (y otros servicios si los inicializas)
export { app, analytics };
