console.log("js");


document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    const fn = document.getElementById("FullName").value;
    const em = document.getElementById("email").value;
    const ps = document.getElementById("password").value;

    const dataPacket = {
        "FullName": fn,
        "Email": em,
        "Password": ps
    };

    console.log(dataPacket);

    document.getElementById('FullName').value ="";
     document.getElementById('email').value ="";
      document.getElementById('password').value ="";

});

document.querySelector("form").addEventListener("reset", () => {

    event.preventDefault();
    confirm('Are u sure') && window.location.reload();

    console.log("form reset");

});

// key press
document.addEventListener('keydown', (event) => {

    let keypress = event.key;
    console.log(keypress);

});