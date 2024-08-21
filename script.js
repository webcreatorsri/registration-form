function validateForm() {
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const message = document.getElementById("message");

    if (!firstname || !lastname || !email || !contact || !address || !city) {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return false; 
    }

    message.style.color = "green";
    message.innerText = "Registration complete!";
    return false; 
}
