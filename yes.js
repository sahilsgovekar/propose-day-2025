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