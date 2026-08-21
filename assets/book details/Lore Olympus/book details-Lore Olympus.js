

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
    'Lore Olympus',
    'Rachel Smythe',
    '2018',
    'Yes',
    'Chapter 280',
    'Witness what the gods do…after dark. The friendships and the lies, the gossip and the wild parties, and of course, forbidden love. Because it turns out, the gods aren’t so different from us after all, especially when it comes to their problems. Stylish and immersive, this is one of mythology’s greatest stories -- The Taking of Persephone -- as it’s never been told before.'
);
