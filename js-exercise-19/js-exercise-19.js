function getFormValue() {
    const form = document.getElementById("form1");

    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    alert(`First name: ${firstName}, Last name: ${lastName}`);
}