

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        const commentSection = document.getElementById('comments');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);
        document.getElementById('commentText').value = '';
    }
});


const stars = document.querySelectorAll('.star-rating .star');
stars.forEach(star => {
    star.addEventListener('click', selectRating);
    star.addEventListener('mouseover', hoverRating);
    star.addEventListener('mouseout', resetHover);
});

function selectRating(e) {
    const value = e.target.getAttribute('data-value');
    stars.forEach(star => {
        star.classList.remove('selected');
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        }
    });
}

function hoverRating(e) {
    const value = e.target.getAttribute('data-value');
    stars.forEach(star => {
        star.classList.remove('hover');
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('hover');
        }
    });
}

function resetHover() {
    stars.forEach(star => {
        star.classList.remove('hover');
    });
}

// Example function to fill in the book details
function setBookDetails(title, author, year, ongoing, latestChapter, description) {
    document.querySelector('h2').textContent = title;
    document.getElementById('author').textContent = author;
    document.getElementById('year').textContent = year;
    document.getElementById('ongoing').textContent = ongoing;
    document.getElementById('latest-chapter').textContent = latestChapter;
    document.getElementById('description').textContent = description;
}

// Example call to set book details
setBookDetails(
    'Demon Slayer',
    'UFOTABLE',
    '2019',
    'No',
    'Chapter 206',
    'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.'
);
