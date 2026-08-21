document.addEventListener('DOMContentLoaded', function() {
    const addToHistoryButtons = document.querySelectorAll('.add-to-history');

    addToHistoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imageContainer = this.closest('.image-container');
            const imageSrc = imageContainer.querySelector('.book-cover').src;
            const title = imageContainer.querySelector('p').textContent;

            let history = localStorage.getItem('history');
            history = history ? JSON.parse(history) : [];

            // Check if the image is already in history by comparing the imageSrc
            const isInHistory = history.some(item => item.imageSrc === imageSrc);

            if (!isInHistory) {
                history.push({ imageSrc, title });
                localStorage.setItem('history', JSON.stringify(history));
                alert('Image added to history!');
            } else {
                alert('Image is already in history!');
            }
        });
    });
});
