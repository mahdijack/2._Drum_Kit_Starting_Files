// var numberOfdrumBottons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfdrumBottons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

//         var buttonInerhtml = this.innerHTML;
//         makeSound(buttonInerhtml);
//     });
// }

// document.addEventListener("keypress", function (event) {
//     makeSound(event.key);
// })

// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;

//         case "a":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;

//         case "s":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;


//         case "d":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;


//         case "j":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;

//         case "k":
//             var kickbass = new Audio("sounds/kick-bass.mp3");
//             kickbass.play();
//             break;

//         case "l":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;

//         default:
//             break;
//     }
// }

var numberOfBusttuns = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfBusttuns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function Keyclick() {
        var bottunsClick = this.innerHTML;
        keySound(bottunsClick);
        SetfalshActive(bottunsClick);
    })
}

document.addEventListener("keypress" , function(event){
    keySound(event.key);
    SetfalshActive(event.key);
})

function keySound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;


        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            break;
    }
}

function buttonsAnimations (SetfalshActive){
    var buttonsActive = document.querySelector("." + SetfalshActive);
    buttonsActive.classList.add("pressed") ;

    setTimeout (function(){
        buttonsActive.classList.remove("pressed") ; 
    },100)
    }