document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const explosionSound = document.getElementById("explosionSound");

  // Обробник для кнопки "Так"
  yesBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Обробник для кнопки "Ні"
  noBtn.addEventListener("click", (e) => {
    const button = e.target;
    const rect = button.getBoundingClientRect();

    // Відтворюємо звук вибуху
    explosionSound.currentTime = 0;
    explosionSound.play();

    // Створюємо елемент вибуху
    const explosion = document.createElement("div");
    explosion.className = "explosion";
    explosion.style.left = rect.left + rect.width / 2 + "px";
    explosion.style.top = rect.top + rect.height / 2 + "px";
    explosion.style.width = rect.width + "px";
    explosion.style.height = rect.height + "px";
    explosion.style.background =
      "radial-gradient(circle, #ff69b4 0%, #ff1493 30%, transparent 70%)";

    // Створюємо текст
    const text = document.createElement("div");
    text.className = "explosion-text";
    text.textContent = "я тебе згвалтую💋";
    text.style.left = rect.left + rect.width / 2 + "px";
    text.style.top = rect.top + rect.height / 2 + "px";

    document.body.appendChild(explosion);
    document.body.appendChild(text);

    // Видаляємо елементи після анімації
    setTimeout(() => {
      button.style.display = "none";
      explosion.remove();
      text.remove();
    }, 4000);
  });

  // Закриття модального вікна
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закриття модального вікна при кліку поза ним
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
