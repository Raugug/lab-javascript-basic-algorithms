// which one is longer
var hacker1 = "ricardo";
var hacker2 = prompt("Whats the drivers name?");
var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length;

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1Length > hacker2Length) {
  console.log("The Driver " + hacker1 + " has the longest name, it has " + hacker1Length + " characters");
} else if ( hacker2Length > hacker1Length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2Length + " characters")
} else if (hacker2Length === hacker1Length) {
  console.log("wow, you both got equally long names, "+hacker1Length+" characters!!")
}

//hacker 1 separated uppercase

var hacker1UpperCase = hacker1.toUpperCase();
var separatedUpperCase = "";
for (var i = 0; i < hacker1Length; i++) {
   separatedUpperCase += hacker1UpperCase[i].concat(" ");
}
console.log(separatedUpperCase);



//hacker 2 reverse
var hacker2reverse = "";
for (var i = hacker2Length -1; i >= 0; i--) {
   hacker2reverse += hacker2[i];
}

console.log(hacker2reverse);




//alphabetic order
var arraySort = [hacker1, hacker2];
var sorted = arraySort.sort();
if (hacker1 === hacker2) {
  console.log("What?! You both got the same name?");
} else if (sorted[0] === hacker1) {
  console.log("The driver's name goes first");
} else { console.log("Yo, the navigator goes first definitely") }

console.log(sorted);

//palyndromes
// We used RegEx to solve the palyndrome problem.
var answer = prompt("enter word here").toLowerCase();

var re = /[\W_]/g;
var answerReplaced = answer.replace(re, "");
var answerReversed = answerReplaced.split('').reverse().join('');
 
 if (answerReplaced === answerReversed) {
   console.log("It's a palyndrome");
 } else {
   console.log("It's not a palyndrome");
 }


//Lorem Ypsum

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id commodo dui. Phasellus auctor fringilla sollicitudin. Proin interdum ullamcorper massa, id venenatis leo. In at tellus sit amet nulla lacinia aliquam ut at velit. Nulla aliquam vestibulum ante eu molestie. Nullam ut sem non arcu ultrices mattis non in lorem. Praesent efficitur at velit non consequat. Maecenas dictum consectetur metus vulputate pretium. Donec condimentum fermentum tristique. Vestibulum ac condimentum nisl. Duis sem nibh, pellentesque vitae mattis et, fringilla sit amet velit. Maecenas bibendum, dui id auctor tempor, mi mauris maximus est, sed lobortis purus felis sed nulla. Phasellus tempor ante sed maximus accumsan. Aenean ut libero aliquam, tincidunt justo vitae, convallis libero. Nunc euismod condimentum neque, at interdum ex pulvinar at. Etiam id nisl in nisi posuere porttitor. Cras ullamcorper et magna non aliquam. Integer volutpat rhoncus est scelerisque tincidunt. Ut accumsan blandit libero, eget aliquet ex scelerisque a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris nec dolor sit amet dui sodales porta. Proin sollicitudin blandit felis, eget tincidunt ex maximus luctus. Etiam a magna ut odio ultricies suscipit. Mauris ultrices vestibulum purus, eget finibus erat. Mauris vel arcu a arcu consectetur finibus. Nam vestibulum, ipsum ut luctus viverra, lorem sem mattis nibh, mattis lobortis dui quam vel odio. Nam nec arcu quis turpis scelerisque venenatis in accumsan nunc. Curabitur iaculis magna arcu, nec sollicitudin ipsum dictum ut. Pellentesque eget dignissim quam. Cras scelerisque eu odio vitae fringilla. Sed nulla ligula, scelerisque a ex vel, ultricies ultricies tellus. Mauris rutrum condimentum tellus eu tincidunt. Nulla finibus tellus ligula, non congue purus pharetra eu. Morbi placerat tellus at ex imperdiet, volutpat ultrices nunc tempus. Pellentesque porta placerat blandit. Cras in mattis dui, ac maximus ipsum.";

paragraph.replace(re, "");

var wordsArr = paragraph.split(' ');
var wordLength = wordsArr.length;
console.log(wordLength); 
var etCount = 0;

for (var i = 0; i < wordLength; i++) {
   wordsArr[i] = wordsArr[i].replace(re, "");
}

for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] == "et") {
        etCount++;
    }
 }

 console.log(etCount);