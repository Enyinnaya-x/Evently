const eventDate = new Date("July 22, 2025 09:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Time calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  // Display the result in the elements
  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  console.log(document.getElementById("days").textContent);
}

  // Update every second
const timerInterval = setInterval(countdown, 1000);