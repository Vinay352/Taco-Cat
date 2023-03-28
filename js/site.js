// get the string from the page
function getValues(){

    // add class invisible to the alert box at the beginning
    document.getElementById("alert").classList.add("invisible");

    // get the entered string
    let userString = document.getElementById("userString").value;
    userString = userString.toLowerCase();

    // palindrome the input string
    let palindromeOrNot = palindromeString(userString);

    // display the palindrome string
    displayPalindromeString(palindromeOrNot, userString);
}


// palindrome the string
function palindromeString(userString){

    let n = userString.length;
    for (let i = 0; i < n/2; i++) {
        // chars match
        
        if (userString[i] !== userString[n - 1 - i]) { 
            // no match
            return false; 
        }
      }
    return true; // strictly equal
}


// display the palindrome string in the UI
function displayPalindromeString(palindromeOrNot, userString){

    if(palindromeOrNot == false){
        // getting the "msg" id, to display the message
        document.getElementById("msg").innerHTML = `String Is Not A Palindrome.`;

        // Making the alert "visible"
        document.getElementById("alert").classList.remove("invisible");
    }else{
        // getting the "msg" id, to display the message
        document.getElementById("msg").innerHTML = `The input string is a palindrome = ${userString}`;

        // Making the alert "visible"
        document.getElementById("alert").classList.remove("invisible");
    }

}