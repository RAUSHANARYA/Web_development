let form = document.querySelector("form");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();

    // Inputs

    let fullName = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let mobile = document.getElementById("number").value.trim();

    let dob = document.getElementById("Dob").value;

    let percentage = document.getElementById("Percentage").value.trim();

    let gender = document.querySelector('input[name="gender"]:checked');


    // Regex

    let nameRegex = /^[A-Za-z ]+$/;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let mobileRegex = /^[6-9]\d{9}$/;

    let percentageRegex = /^(100|[0-9]{1,2})$/;


    let isValid = true;


    // Full Name Validation

    if (!nameRegex.test(fullName))
    {
        alert("Please enter valid full name");
        isValid = false;
    }


    // Email Validation

    if (!emailRegex.test(email))
    {
        alert("Please enter valid email");
        isValid = false;
    }


    // Mobile Validation

    if (!mobileRegex.test(mobile))
    {
        alert("Enter valid 10-digit Indian mobile number");
        isValid = false;
    }


    // DOB Validation

    if (!validateAge(dob))
    {
        alert("Student age must be at least 15 years");
        isValid = false;
    }


    // Gender Validation

    if (!gender)
    {
        alert("Please select gender");
        isValid = false;
    }


    // Percentage Validation

    if (!percentageRegex.test(percentage))
    {
        alert("Enter valid percentage between 0-100");
        isValid = false;
    }


    // Final Submit

    if (isValid)
    {
        alert("Form Submitted Successfully");


        console.log("===== STUDENT DETAILS =====");

        console.log("Full Name :", fullName);

        console.log("Email :", email);

        console.log("Mobile :", mobile);

        console.log("Date of Birth :", dob);

        console.log("Percentage :", percentage);

        console.log("Gender :", gender.parentElement.innerText);
    }

});



// Age Function

function validateAge(dob)
{
    let birthDate = new Date(dob);

    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age >= 15;
}



// Clear Button

let clearBtn = document.querySelector(".clear-btn button");

clearBtn.addEventListener("click", () =>
{
    console.clear();

    alert("Form Cleared Successfully");
});