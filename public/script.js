function startSlotMachine() {
  const display = document.getElementById("number-display");
  const numbers = Array.from({ length: 170 }, (_, i) => i + 1);
  let counter = 0;

  const interval = setInterval(() => {
    if (counter >= 5) {
      clearInterval(interval);
      const winningNumber = numbers[Math.floor(Math.random() * numbers.length)];
      display.textContent = `Winner: ${winningNumber}`;
      return;
    }

    const randomIndex = Math.floor(Math.random() * numbers.length);
    display.textContent = numbers[randomIndex];
    counter++;
  }, 700);
}
