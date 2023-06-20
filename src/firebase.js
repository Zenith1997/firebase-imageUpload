import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCjVS5YACyhLF528RIY1WjJ6eVYGRkuh1Q",
  authDomain: "imageupload-41d2a.firebaseapp.com",
  projectId: "imageupload-41d2a",
  storageBucket: "imageupload-41d2a.appspot.com",
  messagingSenderId: "40950217874",
  appId: "1:40950217874:web:2ab15c6a81189665d87a4b",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
