function sayHi() {
  const messages = [
    "ඞ You look kinda sus...",
    "Amongus detected!",
    "Your friend Amogos is proud of you.",
    "🔪 Impostor is near...",
    "You're the sus one now!"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("output").innerText = random;
}

// Rickroll redirect button
document.getElementById("rickroll-button").addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
