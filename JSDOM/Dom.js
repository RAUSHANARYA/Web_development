console.log("JS Connected");

function Submit() {

  console.log("Submit Button Click");


  const name = document.getElementById("fullName").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  console.log("Name = ", name);
  console.log("Age = ", age);
  console.log("Email = ", email);
  console.log("Password  = ", password);


  document.getElementById("myData").innerHTML =
    "<p><b>Name =</b> " + name + "</p>" +
    "<p><b>Age =</b> " + age + "</p>" +
    "<p><b>Email =</b> " + email + "</p>" +
    "<p><b>Password =</b> " + password + "</p>";

  // clear input fields
  document.getElementById("fullName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  document.getElementById("data").classList.add("divShow");
  document.getElementById("data").classList.remove("divHide");

}
