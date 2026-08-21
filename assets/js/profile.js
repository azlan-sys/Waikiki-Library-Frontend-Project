document.addEventListener('DOMContentLoaded', () => {
    const tryForm = document.getElementById('try-form');
    
    // Load try data from local storage
    const loadtryData = () => {
        const tryData = JSON.parse(localStorage.getItem('tryData')) || {
            joinDate: 'Oct 01, 2021',
            email: 'abc.123@gmail.com',
            username: 'hehe',
            displayName: 'hello'
        };
        document.getElementById('join-date').value = tryData.joinDate;
        document.getElementById('email').value = tryData.email;
        document.getElementById('username').value = tryData.username;
        document.getElementById('display-name').value = tryData.displayName;
        document.getElementById('username-display').textContent = tryData.username;
        document.getElementById('join-date-display').textContent = tryData.joinDate;
    };
    
    // Save try data to local storage
    const savetryData = (data) => {
        localStorage.setItem('tryData', JSON.stringify(data));
    };
    
    tryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const joinDate = document.getElementById('join-date').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const displayName = document.getElementById('display-name').value;
        
        const tryData = { joinDate, email, username, displayName };
        savetryData(tryData);
        
        document.getElementById('username-display').textContent = displayName;
        document.getElementById('join-date-display').textContent = joinDate;
        
        alert('Profile updated successfully!');
    });
    
    
      document.getElementById('logout-btn').addEventListener('click', function() {
       window.location.href = 'profile picture/profile.html';
       });

    loadProfileData();
});
