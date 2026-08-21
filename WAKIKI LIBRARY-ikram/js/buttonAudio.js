// Function to play audio
function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime = 0; // Restart the audio
    audio.play();
}

// Attach event listeners to all left swipe buttons
document.querySelectorAll('.prev-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        playAudio('leftAudio');
        moveCarousel(this, -1);
    });
});

// Attach event listeners to all right swipe buttons
document.querySelectorAll('.next-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        playAudio('rightAudio');
        moveCarousel(this, 1);
    });
});

// Function to move the carousel
function moveCarousel(button, direction) {
    var carousel = button.parentElement;
    var items = carousel.querySelectorAll('.carousel-item');
    var activeItem = carousel.querySelector('.carousel-item.active');
    var activeIndex = Array.from(items).indexOf(activeItem);
    activeItem.classList.remove('active');

    var newIndex = (activeIndex + direction + items.length) % items.length;
    items[newIndex].classList.add('active');
}

/* audio in image */
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.img-audio');
  
    images.forEach(function (img) {
      var audioId = img.getAttribute('data-audio-id');
      var audio = document.getElementById(audioId);
  
      img.addEventListener('click', function () {
        playAudio(audio);
      });
  
      img.addEventListener('mouseover', function () {
        playAudio(audio);
      });
  
      img.addEventListener('mouseout', function () {
        stopAudio(audio);
      });
    });
  
    function playAudio(audio) {
      audio.play();
    }
  
    function stopAudio(audio) {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning if needed
    }
  });
  