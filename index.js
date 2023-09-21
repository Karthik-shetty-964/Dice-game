var title = document.getElementById('title');

var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');

 
reloadFunc = () => {
    var rand1 = Math.floor(Math.random() * 6) + 1;
    var rand2 = Math.floor(Math.random() * 6) + 1;

    dice1.classList.add('rotate');
    dice2.classList.add('rotate');

    dice1.setAttribute('src', `./images/dice${rand1}.png`);
    dice2.setAttribute('src', `./images/dice${rand2}.png`);

    if(rand1 == rand2) {
        title.textContent = "Draw 🏳️"
    } else if(rand1 > rand2) {
        title.textContent = "Karthik wins 🚩"
    } else {
        title.textContent = "Apeksha wins 🚩"
    }

    setTimeout(function(){
        dice1.classList.remove('rotate');
        dice2.classList.remove('rotate');
    }, 1000);

}