import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import  {getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDqu8MFLwT_8w8519gtrrUmkxTIIMVAYJQ",
    authDomain: "codejam-bbc52.firebaseapp.com",
    databaseURL: "https://codejam-bbc52-default-rtdb.firebaseio.com",
    projectId: "codejam-bbc52",
    storageBucket: "codejam-bbc52.appspot.com",
    messagingSenderId: "836253921935",
    appId: "1:836253921935:web:a2b8672035b4d19131f6fa"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase();
  export const storage = getStorage();

  export const auth = getAuth(app)

   