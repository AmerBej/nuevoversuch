// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCH1IZ7cFyw-7E4B5dPMibjuGGduTZ4X_Q",

  authDomain: "filemanager-684cc.firebaseapp.com",

  projectId: "filemanager-684cc",

  storageBucket: "filemanager-684cc.appspot.com",

  messagingSenderId: "636752649135",

  appId: "1:636752649135:web:cc9a3d1cfd41e5a68e2d5a",

  databaseURL:"https://filemanager-684cc-default-rtdb.europe-west1.firebasedatabase.app/"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

console.log(database)

export default {app, database}