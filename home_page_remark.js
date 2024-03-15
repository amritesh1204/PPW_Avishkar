function submitForm(formId) {
    const name = document.getElementById('Name').value;
    const mobile = document.getElementById('Mobile').value;
    const remarks = document.getElementById('Remarks').value;

    // Send the data to the server (using fetch API)
    fetch('/saveFormData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, mobile, remarks }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Form data sent successfully!');
            document.getElementById(formId).reset();
        } else {
            console.error('Failed to send form data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
