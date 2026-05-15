 let sendBtn = document.getElementById("sendBtn");
 let nameInput = document.getElementById("nameInput");
 let msgInput =document.getElementById("msgInput");
 let greeting = document.getElementById("greeting");
  sendBtn.addEventListener("click", function() {  
let name = nameInput.value.trim();
let message = msgInput.value.trim();

if (name === "" || message === "") {
  greeting.textContent = "Please Fill in all fields";          
  greeting.classList.add("success");          
  greeting.classList.remove("error");
} else {
  greeting.textContent = "Hi, " + name + "! Thanks for your message.";
  greeting.classList.add("success");          
  greeting.classList.remove("error");     
}
  });