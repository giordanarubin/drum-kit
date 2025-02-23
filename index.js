//iteração entre os botões da bateria, para cada um, so clicar, a função makeSound é chamada
var arrayDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < arrayDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);

    })
}

/* outra forma de fazer:
const drums = document.querySelectorAll(".drum");
drums.forEach((drum) => drum.addEventListener("click", handleClick));
function handleClick() {
}
*/

//detecta as teclas apertadas e chama a função makeSound, que só "funciona" quando a tecla corresponde a uma das letras dos botões
document.addEventListener("keydown", function(pressed) {

    makeSound(pressed.key);

    buttonAnimation(pressed.key);

})

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:    
            /* document.addEventListener("keydown", function(keyNotInDrums){
                console.log(keyNotInDrums.key); //não está funcionando

            }); */
            break;
    }

}

//coloca animação no botão apertado usando a classe .pressed definida no CSS e retira depois de um tempo
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

