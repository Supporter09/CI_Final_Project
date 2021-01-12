// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCvorREayR_Jqla7s_JDF7sAK7Zcn5tBJc",
    authDomain: "cifinalproject-d6a32.firebaseapp.com",
    projectId: "cifinalproject-d6a32",
    storageBucket: "cifinalproject-d6a32.appspot.com",
    messagingSenderId: "404069096006",
    appId: "1:404069096006:web:c0c0b4666485c3a998c847",
    measurementId: "G-T05V9B71FN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  const ref = firebase.storage().ref();