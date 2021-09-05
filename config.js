import firebase from "firebase";
require("@firebase/firestore");
  const firebaseConfig = {
  apiKey: "AIzaSyB4uEYb54-ssceBJXTEaQMm3hK4lskFdUY",
  authDomain: "padzone-main.firebaseapp.com",
  databaseURL: "https://padzone-main-default-rtdb.firebaseio.com",
  projectId: "padzone-main",
  storageBucket: "padzone-main.appspot.com",
  messagingSenderId: "690925118433",
  appId: "1:690925118433:web:05f046cf2360097cc068a0"
};
const app = initializeApp(firebaseConfig);
export default firebase.firestore();