function startGame(){
    // starting a new game
    let messagesElement = document.getElementById('messages');
    messagesElement!.innerText = "Welcome to Multimath...Starting a new game.";
}

document.getElementById('startGame')!.addEventListener('click', startGame);
