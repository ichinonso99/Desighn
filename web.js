// const myForm = document.getElementById("myForm"); 
// const firstname = document.getElementById("firstname"); 
// const lastname = document.getElementById("lastname"); 
// const email = document.getElementById("email"); 
// const phone = document.getElementById("phone");
// const password = document.getElementById("password"); 
// const output = document.querySelector(".output");
// myForm.addEventListener("submit", formHandler);
// function formHandler(e) { 
//     e.preventDefault();
//     if (firstname.value.length === 0) { 
//         output.innerHTML = "Please enter your firstname"; 
//         output.style.color = "red"; 
//         output.style.fontSize = "1.9rem"; 
//         output.style.fontFamily = "roboto"; 
//     } else if (lastname.value.length === 0) { 
//         output.innerHTML = "Please enter your lastname"; 
//         output.style.color = "red"; 
//         output.style.fontSize = "1.9rem"; 
//         output.style.fontFamily = "roboto";
//     } else if (email.value.length === 0) { 
//         output.innerHTML = "Please enter your email"; 
//         output.style.color = "red"; 
//         output.style.fontSize = "1.9rem"; 
//         output.style.fontFamily = "roboto"; 
//     } else if (!isNaN(phone)) { 
//         output.innerHTML = "Please enter a valid phone number"; 
//         output.style.color = "red"; 
//         output.style.fontSize = "1.9rem"; 
//         output.style.fontFamily = "roboto"; 
//         console.log(typeof phone); 
//     } else if (password.value.length === 0) { 
//         output.innerHTML = "Please enter your password"; 
//         output.style.color = "red"; 
//         output.style.fontSize = "1.9rem"; 
//         output.style.fontFamily = "roboto"; 
//     } else if (password.value.length < 6) { 
//         output.innerHTML = "Password must exceed 6 characters"; 
//         output.style.color = "red"; 
//         output.style.fontSize = "1.9rem"; 
//         output.style.fontFamily = "roboto"; 
//     } else{ 
//         output.innerHTML = "Congratulations! Forms successfully submitted"; 
//         output.style.color = "green"; 
//         output.style.fontSize = "1.9rem";
//         output.style.fontFamily = "roboto";
//     }
// }