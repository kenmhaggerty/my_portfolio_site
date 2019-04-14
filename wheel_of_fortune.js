// Set a secret word!

var word = 'BLUEBERRY'; // ALL CAPS

// Ask player if they would like to guess a letter or guess the
// solution.
var isGuessingLetter = true; // set to false to guess solution

// If they are guessing a letter, set the letter that they are
// guessing.

var guess = 'B'; // [KMH] I updated this variable's name to `guess` so that you can use it for a letter guess or a word guess

var isFound=false;
var result="";
// If guessing a letter...
if(isGuessingLetter==true)
{
    for(i=0;i<word.length;i++) // [KMH] There is something missing on this line... Can you find it?
    {
        // If the word contains the letter...
        if(guess==word[i])
        {
          isFound=true;
          result=result+word[i]; // Print back the word with all instances of that letter revealed.
        }
        else
        {
            result=result+" _ ";
        }
    }

    if(isFound) 	// If the word contain the letter...
    {
        console.log(result); // Print back the word with all instances of that letter revealed.
    }
    else  	// If the word does not contain the letter...
    {
        console.log("Sorry, no letter "+guess +"! but with letter B");
    }
}
else // If guessing the word...
{
	// If they are correct...
    if(guess==word)
    {
        console.log("Congratulations! You won Wheel Of Fortune!");
    }
    else // If they are incorrect...
    {
        console.log("Nope, keep trying!");
    }
}
// End of script!
