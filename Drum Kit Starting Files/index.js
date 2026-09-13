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



// =======----- Practice One Finiding Charecters -----=========== GPT test 1
// const result = {};

// document.addEventListener("keydown", function(event) {

//   const key = event.key;

//   if (key === " ") return;

//   if (result[key]) {
//     result[key]++;
//   } else {
//     result[key] = 1;
//   }

//   console.log(result);
// });


// =========------ Remove Duplicates ------========= GPT test 2
// function duplicateNumbers (numbers){
// const filterNumber = [];

// for(var i of numbers ){
//   if(!filterNumber.includes(i)){
// filterNumber.push(i);
//   } 
// }
// return filterNumber;
// }
// console.log(duplicateNumbers([1,2,3,4,4,5,6,7,7]));




// ========----- Finding most Repeatet Arrayes-----=========== GPT test 3
// function duplicateNumbers (numbers){
// const mostReapetNumber = [];
// for(const i of numbers){
//   if(mostReapetNumber[i]){
//     mostReapetNumber[i]++;
//   }else {
//     mostReapetNumber[i] = 1 ;
//   }
// }

// let result = [];
// let maxcount = 0 ;
// for(const max in mostReapetNumber){
//   if (mostReapetNumber[max] > maxcount){
//     maxcount = mostReapetNumber[max];
//     result = max ;
//   }
// }
// return result;
// }
// console.log(duplicateNumbers([1,2,3,4,4,5,6,7,7,7,7]));



//=========----- Filtering Arrays -----============ GPT test 4
// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "Reza", age: 20 },
//   { name: "Mina", age: 25 },
//   { name: "John", age: 30 }
// ];

// function groupUsers(users, ages) {
//   const resutl = {};

//   for (const i of users) {
//     if (resutl[i[ages]]) {
//       resutl[i[ages]].push(i);
//     } else {
//       resutl[i[ages]] = [i] ;
//     }
//   }
//   return resutl;
// }
// console.log(groupUsers(users, "age"));



//=========----- Constacrtor not a Clone -----============ GPT test 5
// const original = {
//   name: "Ali",
//   age: 25,
//   address: {
//     city: "Tehran"
//   }
// };
// function deepClone (name , age , address ){
//     this.name = name ;
//     this.age = age ;
//     this.address = address ;
// }
// console.log(original);
// var copy = new deepClone ("tomi" , 33 , {address : "la"} );
// copy.address.city = "Shiraz";
// console.log(copy);


//=========----- Constacrtor2not a Clone  -----============ GPT test 5
// const original = {
//   name: "Ali",
//   age: 25,
//   address: {
//     city: "Tehran"
//   }
// };

// function DeepCloning (object){
//   this.name = object.name ;
//     this.age = object.age ;
//     this.address = {
//       city: object.address.city
//     } ;
// }

// console.log(DeepCloning(original));
// var copy = new DeepCloning(original);
// copy.address.city = "Shiraz";
// console.log(copy);



//=========----- Deep colne -----============ GPT test 5 right Answer
// const original = {
//   name: "Ali",
//   age: 25,
//   address: {
//     city: "Tehran"
//   }
// };

// function DeepColne(object){
//   const copy = {};

// for (const i in object){
//   if (typeof object[i] === "object"){
//     copy[i] = DeepColne(object[i]);
//   }else {
//     copy[i] = object[i] ;
//   }
// }
//   return copy ;
// }
// const copy1 = DeepColne(original);
// copy1.address.city = "Bushehr" ;

// console.log(original);
// console.log(copy1);

//=========----- حذف موارد تکراری از Object -----============ GPT test
// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "Reza", age: 20 },
//   { name: "Mina", age: 25 },
//   { name: "John", age: 30 }
// ];

// function removeDuplicates(users, ages) {

//   const result = [];

//   for (const i of users) {

//     let exists = false;

//     for (const user of result) {

//       if (user[ages] === i[ages]) {
//         exists = true;
//       }

//     }

//     if (!exists) {
//       result.push(i);
//     }
//   }

//   return result;
// }

// console.log(removeDuplicates(users, "age"));

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "Reza", age: 20 },
//   { name: "Mina", age: 25 },
//   { name: "John", age: 30 }
// ];

// function filteringDuplicates(users, ages) {
//   const filtering = [];

//   for (const i of users) {
//     var exist = false;
    
//     for (const n of filtering) {
//       if (n[ages] === i[ages]) {
//         exist = true;
//       }
//     }
//     if (!exist) {
//       filtering.push(i);
//     }
//   }
//   return filtering;
// }
// console.log(filteringDuplicates(users, "age"));


//=========----- تمرین ۶ — Memoization -----============ GPT test 6

// const cache = function memorize(add){
//     return add (4 , 7);
// };
// function add( a , b) {
//     return a + b ;
// }
// console.log(add(3 , 5));
// console.log(cache(add));

const cache = {};

function memorize(fn) {

  return function(a, b) {

    const key = a + "," + b;

    if (cache[key]) {
      return cache[key];
    }

    const result = fn(a, b);

    cache[key] = result;

    return result;
  };
}

function add(a, b) {
  console.log("محاسبه شد");
  return a + b;
}

const newAdd = memorize(add);

console.log(newAdd(3, 5));
console.log(newAdd(3, 5));
console.log(newAdd(3, 5));


//=========----- تمرین ۷ — Promise Queue -----============ GPT test 7



//=========----- تمرین ۸ — Event Emitter -----============ GPT test 8



//=========----- تمرین ۹ — Promise Pool -----============ GPT test 9



//=========----- یک Shopping Cart Engine بدون فریم‌ورک بنویس -----============ GPT test 10



