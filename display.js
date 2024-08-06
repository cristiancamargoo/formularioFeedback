document.addEventListener('DOMContentLoaded', function() {
    var name = sessionStorage.getItem('name');
    var email = sessionStorage.getItem('email');
    var feedback = sessionStorage.getItem('feedback');

    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayFeedback').textContent = feedback;
});
