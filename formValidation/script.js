console.log("JS Connected");

const button = document.getElementById("btn");

button.addEventListener("click", Submit);

function Submit() {
  console.log("Submit Button Click");

  const name = document.getElementById("Fullname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Name =", name);
  console.log("Phone =", phone);
  console.log("Email =", email);
  console.log("Password =", password);

  // Name Validation
  if (!/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
    console.log("Invalid Name");
  } else {
    document.getElementById("nameError").innerText = "";
    console.log("Valid Name");
  }

  // Phone Validation
  if (/^[6-9\d]{9}$/.test(phone)) {
    document.getElementById("phoneError").innerText = "";
    console.log("Valid Phone");
  } else {
    document.getElementById("phoneError").innerText = "Invalid Phone Number";
    console.log("Invalid Phone");
  }

  // Email Validation
  if (/^[A-Za-z\.\_\d]+@gmail.com$/.test(email)) {
    document.getElementById("emailError").innerText = "";
    console.log("Valid Email");
  } else {
    document.getElementById("emailError").innerText = "Invalid Email";
    console.log("Invalid Email");
  }
}
