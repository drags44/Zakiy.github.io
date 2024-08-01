// Example of a simple alert on page load
window.onload = function() {
    alert('Welcome to My Boy Scouts Page!');
};

// Example function to validate a contact form
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    if (name == "" || email == "") {
        alert("Name and email must be filled out");
        return false;
    }
}
