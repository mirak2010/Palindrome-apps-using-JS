function palindrome (myString){
    var input= myString.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    var reversedInput=input.split('').reverse().join('');
    if (input === reversedInput){
        document.write("<div>" + myString + " is a palindrome <div>")
    }
    else{
        document.write("<div>" + myString + " is not a palindrome<div>")
    }

}
var a = prompt("Enter the word");
palindrome(a);

