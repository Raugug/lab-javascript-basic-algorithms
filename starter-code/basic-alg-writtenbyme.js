var hacker1 = "Raúl";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Longer

var hack1Length = hacker1.length;
var hack2Length = hacker2.length;

if (hack1Length > hack2Length){
    console.log("The Driver has the longest name, it has " + hack1Length + " characters");
 } else if (hack1Length < hack2Length){
    console.log("Yo, navigator got the longest name, it has "+ hack2Length + " characters");
 } else {
    console.log("wow, you both got equally long names, "+ hack1Length +" characters!!");
 }

 // Mayus + SPACES

 var hack1Upper = hacker1.toUpperCase();
 var spacesUpper = "";
 for (var i = 0; i < hack1Length; i++){
     spacesUpper += hack1Upper[i].concat(" ");
 }
 console.log(spacesUpper);

 //2nd form

 var spUpper = hack1Upper.split("").join(" ");
 console.log(spUpper);

 //reverse 2 forms

 var hack2Reverse = hacker2.split("").reverse().join("");
 console.log(hack2Reverse);

 var hack2Rev = "";
 for (var i = hack2Length-1; i >= 0; i--){
    hack2Rev += hacker2[i];
 }
 console.log(hack2Rev);



 //Lexicographic

 var orderNames = [hacker1, hacker2];
 orderNames.sort();


 if (hacker1 === hacker2){
     console.log("What?! You both got the same name?");
 } else if (orderNames[0] === hacker1){
     console.log("The driver's name goes first");
 } else {
     console.log("Yo, the navigator goes first definitely");
 }

 //palyndrome
 // re = Non alphaNumeric characters. Regular exp

 var answer = prompt("Enter a word here").toLowerCase();
 var re = /[\W_]/g;
 var answerReplaced = answer.replace(re, "");
 var answerReversed = answerReplaced.split('').reverse().join('');

 if (answerReplaced === answerReversed){
     console.log(answer + " is a palyndrome");
 } else {
     console.log(answer + " is not a palyndrome");
 }

//loren ipsum

var lorenIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec metus lacus. Vivamus pharetra cursus luctus. Nullam at tempor neque. Nullam ex odio, pulvinar vel eros iaculis, gravida eleifend risus. Quisque sed mauris quis sapien ultricies efficitur. Nulla facilisi. Donec euismod suscipit mi, ac aliquet tellus tincidunt quis. Donec ut ex dapibus, vulputate nibh sit amet, volutpat augue. Vestibulum a velit ac ipsum mollis bibendum. Vivamus a turpis et nibh mattis pharetra non ultricies ante. Donec ut ligula sagittis, ullamcorper sem sed, eleifend leo. Sed id dictum quam. Mauris sed lorem felis. Vivamus ultricies leo ut tempus convallis. Donec libero odio, sodales vitae varius non, vulputate ac ante. Vestibulum vulputate pharetra tortor, euismod viverra nunc. Quisque id convallis eros, sit amet mattis turpis. Integer varius urna in justo interdum cursus. Nullam molestie congue ante id tincidunt. Morbi dignissim nisi leo, vel bibendum risus luctus vitae. Suspendisse eleifend efficitur nibh a mattis. Donec viverra lacus maximus, pharetra nibh vitae, posuere erat.Maecenas lacus lectus, semper vitae nunc id, posuere feugiat nulla. Praesent tempus laoreet tristique. Duis luctus, arcu nec dapibus mattis, ante nisi dignissim mauris, et iaculis lacus metus eget dolor. Phasellus justo quam, faucibus a tempor luctus, vehicula id ex. Duis quis justo magna. Vivamus tincidunt turpis sed felis gravida, quis volutpat libero egestas. Donec gravida libero egestas neque laoreet ultrices. Proin scelerisque ipsum eget nisl iaculis, ac posuere nisl hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
 
var words = lorenIpsum.split(" ");
var lorenLength = words.length;
console.log("Number of words: " + lorenLength);
var wordCount = 0;
var wordSearch = "et";
for (var i = 0; i < lorenLength; i++){
    words[i] = words[i].replace(re, "");
    if (words[i] === wordSearch) {
        wordCount++;
    }
}
console.log("The word " + wordSearch + " appears " + wordCount + " times.");

