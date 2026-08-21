document.addEventListener('DOMContentLoaded', function() {
    const historyContainer = document.querySelector('.history');
    let history = localStorage.getItem('history');
    history = history ? JSON.parse(history) : [];

    history.forEach(imageSrc => {
        const div = document.createElement('div');
        div.className = 'history-item';//will be added automatically

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'History Image';

        const button = document.createElement('button');
        button.className = 'remove-from-history';
        button.textContent = 'Remove from History';
        button.addEventListener('click', function() {
            history = history.filter(item => item !== imageSrc);
            localStorage.setItem('history', JSON.stringify(history));
            historyContainer.removeChild(div);
        });

        div.appendChild(img);
        div.appendChild(button);
        historyContainer.appendChild(div);
    });
});
