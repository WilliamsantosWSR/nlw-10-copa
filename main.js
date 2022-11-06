function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
    </li>

  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>     
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "portugal") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("brazil", "16:00", "ghana")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("camaroon", "16:00", "brazil") +
      createGame("brazil", "16:00", "serbia")
  )
