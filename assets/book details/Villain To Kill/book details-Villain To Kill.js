
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
    'Villain To Kill',
    'Fupin , Eunji',
    '2021',
    'Yes',
    'Chapter 145',
    'There are two kinds of people with special abilities: villains, who are driven by their evil desires, and psykers, who pursue justice and work against villains. Cassian Lee is a very powerful psyker with a good heart. But one day, when he visits his friend in Greece, things take a wrong turn. Following an unexpected chain of events, Cassian ends up in the body of a Korean high school boy... who has just become a villain! Will his sense of justice win in the end or will he end up becoming a cold-blooded villain?'
);
