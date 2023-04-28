var firebaseConfig = {
    apiKey: "AIzaSyAIor5dBmlLYCvs1iihT1-aGGEFbIiEA3Y",
    authDomain: "firhub-5a60c.firebaseapp.com",
    projectId: "firhub-5a60c",
    storageBucket: "firhub-5a60c.appspot.com",
    messagingSenderId: "396283927300",
    appId: "1:396283927300:web:8c94f71aa111a83abe0e51",
    measurementId: "G-GPNXP69WKZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      
        location.replace("index.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

// function logout(){
//     firebase.auth().signOut()
//     location.replace("login.html");
   
// }