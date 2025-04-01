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

    // Додаємо додаткові поцілунки
    for (let i = 1; i <= 3; i++) {
      const kiss = document.createElement("div");
      kiss.className = `kiss${i}`;

      // Випадкові значення для напрямку руху
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const x2 = (Math.random() - 0.5) * 400;
      const y2 = (Math.random() - 0.5) * 400;

      kiss.style.setProperty("--x", `${x}px`);
      kiss.style.setProperty("--y", `${y}px`);
      kiss.style.setProperty("--x2", `${x2}px`);
      kiss.style.setProperty("--y2", `${y2}px`);

      explosion.appendChild(kiss);
    }

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
