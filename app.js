
function refreshBtn() {
    window.location.reload();
    console.log("refresh")
}



function roll() {
    const firstRandomNum = Math.floor(Math.random()*6)+1;
    const firstDiceImage = 'images/dice' + firstRandomNum + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)

    let player1total = 0

    player1total += firstRandomNum
    

    document.getElementById("score").innerHTML = player1total;
    if (firstRandomNum === 1) {
        document.querySelector('h1').innerHTML = 'You lose!';
    } else if ( firstRandomNum >= 20){
        document.querySelector('h1').innerHTML = 'You win!';
    } else {
        document.querySelector('h1').innerHTML = 'Keep rolling!';

    }

}









