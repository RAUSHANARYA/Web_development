let submitBtn = document.querySelector(".submit-btn button");
let clearBtn = document.querySelector(".clear-btn button");

submitBtn.addEventListener("click", function (e)
{
    e.preventDefault();

    // Inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("number").value.trim();
    let dob = document.getElementById("Dob").value;
    let percentage = document.getElementById("Percentage").value.trim();

    // Gender
    let genderInput = document.querySelector('input[name="gender"]:checked');

    let gender = "";

    if (genderInput != null)
    {
        gender = genderInput.parentElement.innerText;
    }

    // Regex
    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobilePattern = /^[6-9][0-9]{9}$/;

    // Name Validation
    if (name === "")
    {
        alert("Full Name is required");
        return;
    }

    if (!namePattern.test(name))
    {
        alert("Name should contain only letters and spaces");
        return;
    }

    // Email Validation
    if (email === "")
    {
        alert("Email is required");
        return;
    }

    if (!emailPattern.test(email))
    {
        alert("Enter valid email address");
        return;
    }

    // Mobile Validation
    if (mobile === "")
    {
        alert("Mobile number is required");
        return;
    }

    if (!mobilePattern.test(mobile))
    {
        alert("Enter valid 10 digit Indian mobile number");
        return;
    }

    // DOB Validation
    if (dob === "")
    {
        alert("Date of Birth is required");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (age < 15)
    {
        alert("Student must be at least 15 years old");
        return;
    }

    // Percentage Validation
    if (percentage === "")
    {
        alert("Percentage is required");
        return;
    }

    if (percentage < 0 || percentage > 100)
    {
        alert("Percentage must be between 0 to 100");
        return;
    }

    // Gender Validation
    if (genderInput == null)
    {
        alert("Please select gender");
        return;
    }

    // Success Message
    alert("Form Submitted Successfully");


    // Console Output

    console.log("===== STUDENT DETAILS =====");

    console.log("Full Name :", name);

    console.log("Email :", email);

    console.log("Mobile Number :", mobile);

    console.log("Date of Birth :", dob);

    console.log("Age :", age);

    console.log("Gender :", gender);

    console.log("Percentage :", percentage);

});


// Clear Button

clearBtn.addEventListener("click", function ()
{
    console.clear();

    alert("Form Cleared Successfully");
});