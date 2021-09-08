
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAOdHlYqAIBsKb_KfK6uG4FgPAoXRFo62Q",
      authDomain: "kwitter-de3ca.firebaseapp.com",
      projectId: "kwitter-de3ca",
      storageBucket: "kwitter-de3ca.appspot.com",
      messagingSenderId: "58311675223",
      appId: "1:58311675223:web:8966d8b6f609d760110212"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
