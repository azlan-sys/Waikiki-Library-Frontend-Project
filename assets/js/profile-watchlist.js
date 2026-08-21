document.addEventListener('DOMContentLoaded', function() {
    const historyContainer = document.querySelector('.history');
    let history = localStorage.getItem('history');
    history = history ? JSON.parse(history) : [];

    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';

        const img = document.createElement('img');
        img.src = item.imageSrc;
        img.alt = 'History Image';

        const title = document.createElement('p');
        title.textContent = item.title;

        const button = document.createElement('button');
        button.className = 'remove-from-history';
        button.textContent = 'Remove from History';
        button.addEventListener('click', function() {
            history = history.filter(historyItem => historyItem.imageSrc !== item.imageSrc);
            localStorage.setItem('history', JSON.stringify(history));
            historyContainer.removeChild(div);
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(button);
        historyContainer.appendChild(div);
    });
});
