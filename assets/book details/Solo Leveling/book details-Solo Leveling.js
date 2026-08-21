
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
    'Solo Leveling',
    'Chugong',
    '2016',
    'No',
    'Chapter 200',
    '10 years ago, after “the Gate” that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as "Hunters". However, not all Hunters are powerful. My name is Sung Jin-Woo, an E-rank Hunter. I am someone who has to risk his life in the lowliest of dungeons, the "Worlds Weakest". Having no skills whatsoever to display, I barely earned the required money by fighting in low-leveled dungeons… at least until I found a hidden dungeon with the hardest difficulty within the D-rank dungeons! In the end, as I was accepting death, I suddenly received a strange power, a quest log that only I could see, a secret to leveling up that only I know about! If I trained in accordance with my quests and hunted monsters, my level would rise. Changing from the weakest Hunter to the strongest S-rank Hunter!'
);
