let score = Number(prompt("Please enter a number between 1 and 100 only\n"));

if(score >= 1 && score <= 100 ) {
    if(score >= 60 && score <= 69) {
        alert("You received a D grade\n");
    } else if(score >= 70 && score <= 79 ) {
        alert("You received C grade\n");
    } else if(score >= 80 && score <= 89 ) {
        alert("You received B grade\n");
    } else if(score >= 90 && score <= 100 ) {
        alert("You received an A grade\n");
    } else {
        alert("You received an F grade\n");
    }
}
else { 
    alert("The range is between 1 and 100. Please try again ! "); // tested for negative numbers, String and beyond 100 too.
}