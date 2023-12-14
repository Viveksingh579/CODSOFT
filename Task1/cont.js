function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error = document.getElementById('error');

    // Simple validation
    if (name === '' || email === '' || message === '') {
        error.textContent = 'All fields are required.';
        return;
    }

    // You can perform additional validation or send the data to the server here

    // Reset error message
    error.textContent = '';

    // Display a success message (you can modify this part based on your needs)
    alert('Contact form submitted successfully!');
}