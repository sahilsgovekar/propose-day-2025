// Redirect to Instagram when "Yes" is clicked
document.getElementById("yes-btn").addEventListener("click", function () {
	window.location.href = "https://www.instagram.com/sahilsgovekar";
});

// Fun animation for "No" button
document.getElementById("no-btn").addEventListener("mouseover", function () {
	const button = this;
	const container = document.querySelector(".container");
	const maxX = container.clientWidth - button.clientWidth;
	const maxY = container.clientHeight - button.clientHeight;

	// Move button to a random position
	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	button.style.position = "absolute";
	button.style.left = `${randomX}px`;
	button.style.top = `${randomY}px`;
});

document.addEventListener('DOMContentLoaded', function() {
  // Create floating hearts
  const heartsContainer = document.querySelector('.hearts-container');
  
  function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Random properties
      heart.style.setProperty('--x', `${Math.random() * 100}%`);
      heart.style.setProperty('--duration', `${Math.random() * 2 + 3}s`);
      heart.style.setProperty('--delay', `${Math.random() * 5}s`);
      
      heartsContainer.appendChild(heart);
      
      // Remove heart after animation
      heart.addEventListener('animationend', () => {
          heart.remove();
      });
  }

  // Create hearts periodically
  setInterval(createHeart, 300);

  // Handle No button
  const noBtn = document.getElementById('no-btn');
  noBtn.addEventListener('mouseover', function() {
      const container = document.querySelector('.container');
      const containerRect = container.getBoundingClientRect();
      const btnRect = this.getBoundingClientRect();
      
      let newX = Math.random() * (containerRect.width - btnRect.width);
      let newY = Math.random() * (containerRect.height - btnRect.height);
      
      this.style.position = 'absolute';
      this.style.left = `${newX}px`;
      this.style.top = `${newY}px`;
  });

  // Handle Yes button
  const yesBtn = document.getElementById('yes-btn');
  yesBtn.addEventListener('click', function() {
      // Create heart explosion effect
      for(let i = 0; i < 30; i++) {
          setTimeout(() => createHeart(), i * 50);
      }
      
      // Redirect after animation
      setTimeout(() => {
          window.location.href = "https://www.instagram.com/sahilsgovekar";
      }, 1500);
  });
});