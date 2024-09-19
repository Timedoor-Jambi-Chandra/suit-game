document.addEventListener("DOMContentLoaded", () => {
  const choicesContainer = document.getElementById("choices");
  const resultDiv = document.getElementById("result");

  choicesContainer.addEventListener("click", (event) => {
    const playerChoice = event.target
      .closest(".choice")
      ?.getAttribute("data-choice");

    if (!playerChoice) return;

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
  });

  function getComputerChoice() {
    const randomValue = Math.random() * 10;
    let choice;

    switch (true) {
      case randomValue > 8:
        choice = "kertas";
        break;
      case randomValue >= 3:
        choice = "batu";
        break;
      default:
        choice = "gunting";
    }

    return choice;
  }

  function determineWinner(player, computer) {
    if (player === computer) return "draw";
    if (
      (player === "batu" && computer === "gunting") ||
      (player === "gunting" && computer === "kertas") ||
      (player === "kertas" && computer === "batu")
    ) {
      return "win";
    }
    return "lose";
  }

  function displayResult(player, computer, result) {
    resultDiv.innerHTML = `
      <p>Kamu memilih: <strong>${player}</strong></p>
      <p>Komputer memilih: <strong>${computer}</strong></p>
      <h2>${
        result === "draw"
          ? "Seri!"
          : result === "win"
          ? "Kamu menang!"
          : "Kamu kalah!"
      }</h2>
    `;
  }
});
