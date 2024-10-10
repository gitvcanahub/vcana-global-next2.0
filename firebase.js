import { initializeApp } from "firebase/app";

import "firebase/compat/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoWqEbIGZS8XuwSJrauk64-FyU3l7psWU",
  authDomain: "vcana-global.firebaseapp.com",
  projectId: "vcana-global",
  storageBucket: "vcana-global.appspot.com",
  messagingSenderId: "67159139554",
  appId: "1:67159139554:web:360049f928c1e3f253aabb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
