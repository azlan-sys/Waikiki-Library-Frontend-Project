function toggleForms() {
    const signInContainer = document.getElementById('sign-in-container');
    const signUpContainer = document.getElementById('sign-up-container');
    if (signInContainer.classList.contains('visible')) {
        signInContainer.classList.remove('visible');
        signInContainer.classList.add('hidden');
        signUpContainer.classList.remove('hidden');
        signUpContainer.classList.add('visible');
    } else {
        signInContainer.classList.remove('hidden');
        signInContainer.classList.add('visible');
        signUpContainer.classList.remove('visible');
        signUpContainer.classList.add('hidden');
    }
    function forgotPassword() {
        alert('Forgot Password functionality is not implemented yet.');
 }
}


