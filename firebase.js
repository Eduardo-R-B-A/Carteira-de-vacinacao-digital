import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";





// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAIWfXSuYz7U1piw5ycPDXZ2GZCNzRlVGc",
  authDomain: "carteira-vac-digital.firebaseapp.com",
  databaseURL: "https://carteira-vac-digital-default-rtdb.firebaseio.com",
  projectId: "carteira-vac-digital",
  storageBucket: "carteira-vac-digital.appspot.com",
  messagingSenderId: "358262989024",
  appId: "1:358262989024:web:5d94258817daf85a10b085",
  measurementId: "G-QM51D73E0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };