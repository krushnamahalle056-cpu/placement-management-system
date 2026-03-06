function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let role = document.getElementById("role").value;

if(email == "" || password == "" || role == ""){
alert("Please fill all fields");
return;
}

if(role == "student"){
window.location.href = "student_dashboard.html";
}

else if(role == "recruiter"){
window.location.href = "recruiter_dashboard.html";
}

else if(role == "admin"){
window.location.href = "admin-dashboard.html";
}

}



// for admin-dashboard

function showSection(section){

document.getElementById("home").style.display="none";
document.getElementById("students").style.display="none";
document.getElementById("recruiters").style.display="none";
document.getElementById("jobs").style.display="none";

document.getElementById(section).style.display="block";

}

function logout(){

window.location.href="index.html";

}