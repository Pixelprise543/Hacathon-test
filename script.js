document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("go");
  const output = document.getElementById("excuse");

  button.addEventListener("click", () => {
    const excuse = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
    output.textContent = excuse;
  });
});
