let var1 = prompt("Enter the first number");
let var2 = prompt("Enter the second number");
var1 = parseInt(var1);
var2 = parseInt(var2);
if (var1 > var2) {
    document.write(`${var1} is the larger of the two `);
} else if (var1 < var2) {
    document.write(`${var2} is the larger of the two `);
} else {
    console.log("Both are equal!");
}