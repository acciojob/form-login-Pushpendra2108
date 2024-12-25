function getFormvalue() {
    let form = document.forms["form1"]; // Access the form using its name
    let firstName = form["fname"].value; // Access the input field using its name
    let lastName = form["lname"].value; // Access the input field using its name

    alert(firstName + " " + lastName); 
}