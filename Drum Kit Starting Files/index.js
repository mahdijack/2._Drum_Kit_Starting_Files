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

const sounds = {
    w: "tom-1.mp3",
    a: "tom-2.mp3",
    s: "tom-3.mp3",
    d: "tom-4.mp3",
    j: "crash.mp3",
    k: "kick-bass.mp3",
    l: "snare.mp3"
};

document.querySelectorAll(".drum").forEach(button =>
    button.addEventListener("click", () => makeSound(button.innerHTML))
);

document.addEventListener("keypress", event => makeSound(event.key));

function makeSound(key) {
    if (sounds[key]) new Audio("sounds/" + sounds[key]).play();
}
