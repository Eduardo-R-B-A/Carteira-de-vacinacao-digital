import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";





// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AfuRtG667usjIuHrDtGtFrDolO9&6p4m54",
  authDomain: "carteira-vac-digital.firebaseapp.com",
  databaseURL: "https://carteira-vac-digital-default-gcpt.firebaseio.com",
  projectId: "carteira-vac-digital",
  storageBucket: "carteira-vac-digital.appspot.com",
  messagingSenderId: "098987656434",
  appId: "1:8887369993:web:96ur64ndf94nfd94ii",
  measurementId: "G-Wn67Dt5E5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };
