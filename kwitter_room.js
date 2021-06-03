
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDbmlKgym4m52Xe-iGENLtMdyU5YCpEZ94",
      authDomain: "baby-of-kwitter.firebaseapp.com",
      databaseURL: "https://baby-of-kwitter-default-rtdb.firebaseio.com",
      projectId: "baby-of-kwitter",
      storageBucket: "baby-of-kwitter.appspot.com",
      messagingSenderId: "846616555244",
      appId: "1:846616555244:web:f717dcdb57c4c82257ffc9",
      measurementId: "G-52PK3F5ZWN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
              purpose:"addingroomname" 
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }
function getData() 
{firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
{childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
      console.log("room_name - "+Room_names);

      row="<div class='room_name'id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

 function redirecttoroomname(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html"
 }
function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
}
