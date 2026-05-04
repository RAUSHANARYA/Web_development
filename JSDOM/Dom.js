console.log("JS Connected");

function Submit() {
  console.log("submit button click");

  const fn = document.getElementById("fullName").value;

  console.log(fn);

  document.getElementById("myData").innerText = "Name : " + fn;

  document.getElementById("fullName").value = "";
}
