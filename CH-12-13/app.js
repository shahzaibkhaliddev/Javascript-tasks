// Task no # 1

var prompt1;
prompt1 = prompt("Enter  a character (number or string)");

if (prompt1 == prompt1.toUpperCase()){
    alert("UpperCase has Found");
}
else if (prompt1 == prompt1.toLowerCase()){
    alert("LowerCase has Found");
}


// Task no # 2

var prompt2;
var prompt3;
prompt2 = prompt("Enter First String Value");
prompt3 = prompt("Enter Second String Value");

if (prompt2 == prompt3){
    alert("Integers are Equal");
}
else if (prompt2 < 30 || prompt3 < 40){
    alert("Value is Large");
}

// Task no # 3;

var prompt4 = prompt("Enter a Number");

if(prompt4 == -10, -20, -30, -40, -50, -60, -70, -80, -90){
    alert("You Entered Negative Number");
}
else if (prompt4 == prompt4.toString()){
    alert("You Entered Positive Number");
}
else if (prompt4 == 0){
    alert("Your Entered Value is 0");
}

// Task no # 4

var prompt5 = prompt("Ente Vowel");
var vowela = ("a");
var voweli = ("i");
var vowelo = ("o");
var vowelu = ("u");

if(prompt5 == vowela){
    alert("True");
}
else if (prompt5 == voweli){
    alert("True");
}
else if (prompt5 == vowelo){
    alert("True");
}
else if (prompt5 == vowelu){
    alert("True");
}
else if (vowel !== vowela.length){
    alert("False");
}
else if (vowel !== voweli.length){
    alert("False");
}
else if (vowel !== vowelo.length){
    alert("False");
}
else if (vowel !== vowelu.length){
    alert("False");
}



// Task no # 5

var pass = prompt("Please enter your password");
var repass = prompt("Confirm Password");

if (repass === pass) {
    alert("Correct! The password you entered matches the original password")
}
else if (repass !== pass) {
    alert("Incorrect password")
}


// Task no # 6

var greeting;
var hour = 13;
if (hour < 18)
 {
    alert(greeting = "Good day");
}
else if (hour > 18) {
    alert(greeting = "Good evening");
} 


// task no # 7

var time = prompt("Please Enter The Current Time in  Format like: 1900");

if (time >= 0000 && time < 1200){
    alert("Good Morning")
}
else if (time >= 1200 && time < 1700){
    alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening")
}
else if (time >= 2100 && time < 2359){
    alert("Good Night")
}




