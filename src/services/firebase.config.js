import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVbQURAU7756tFSXBdcTTqxdOdk8xEAc4",
  authDomain: "testehosting-1036d.firebaseapp.com",
  projectId: "testehosting-1036d",
  storageBucket: "testehosting-1036d.appspot.com",
  messagingSenderId: "197031352798",
  appId: "1:197031352798:web:214af916cb9aa0d99b254f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);