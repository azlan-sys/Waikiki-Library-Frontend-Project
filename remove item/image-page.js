document.addEventListener('DOMContentLoaded', function() {
    const addToHistoryButtons = document.querySelectorAll('.add-to-history');

    addToHistoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imageSrc = this.previousElementSibling.src;

            let history = localStorage.getItem('history');
            history = history ? JSON.parse(history) : [];

            if (!history.includes(imageSrc)) {
                history.push(imageSrc);
                localStorage.setItem('history', JSON.stringify(history));
                alert('Image added to history!');
            } else {
                alert('Image is already in history!');
            }
        });
    });
});
