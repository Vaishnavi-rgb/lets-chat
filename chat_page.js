var firebaseConfig = {
    apiKey: "AIzaSyCrCf8oyoEInh9uHsL4Akr9M1piq8BwbjM",
    authDomain: "let-s-chat-app-6e61c.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-6e61c-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-6e61c",
    storageBucket: "let-s-chat-app-6e61c.appspot.com",
    messagingSenderId: "407813929219",
    appId: "1:407813929219:web:9d38e95570f8faa639d136"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
 document.getElementById("user_name_1").innerHTML="Welcome  "+user_name+" !!";
 
 function AddRoom(){
  room_name=document.getElementById("name_of_room").value;
firebase.database().ref("/").child(room_name).update
({
      purpose:"adding_room_name"
});
localStorage.setItem("name_of_room",room_name);
window.location="chat_now.html";

}


 function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("name_of_room");
   window.location="chat.html";
   alert("You have been successfully logout");

 }
 

  