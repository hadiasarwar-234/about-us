document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('send_email.php', { 
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
