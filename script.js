let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]              // diagonals
];

function handleMove(index) {
  if (gameStatus[index] === '' && !checkWinner()) {
    gameStatus[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    if (checkWinner()) {
      document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
    } else if (gameStatus.every(cell => cell !== '')) {
      document.getElementById('message').innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(index => gameStatus[index] === currentPlayer);
  });
}

function resetGame() {
  gameStatus = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
  document.getElementById('board').querySelectorAll('.cell').forEach(cell => {
    cell.innerText = '';
  });
}
