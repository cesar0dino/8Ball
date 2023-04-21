const readLine = require(`readline-sync`);

let answer = readLine.question("What type of sandwich would you like chicken $5.25, beef $6.25, or tofu $5.75?: ");
while (answer != "chicken" && answer != "beef" && answer != "tofu"){
    console.log("invalid choice");
    answer = readLine.question("Enter c, b, or n: ");
}
let answer2 = readLine.question("Would you like a beverage with it? yes or no: ");
while (answer != "yes" && answer != "no"){
}