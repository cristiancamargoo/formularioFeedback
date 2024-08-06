document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var feedback = document.getElementById('feedback').value.trim();
    var message = document.getElementById('message');
    message.innerHTML = '';

    if (name === '' || email === '' || feedback === '') {
        var errorMessage = 'Por favor, preencha os seguintes campos:';
        if (name === '') {
            errorMessage += '<br>- Nome';
        }
        if (email === '') {
            errorMessage += '<br>- Email';
        }
        if (feedback === '') {
            errorMessage += '<br>- Feedback';
        }
        message.innerHTML = errorMessage;
        message.style.color = 'red';
    } else {
        // Store feedback data in sessionStorage
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('feedback', feedback);

        // Redirect to feedback.html
        window.location.href = 'feedback.html';
    }
});
