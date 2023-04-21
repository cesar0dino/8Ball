const readLine = require(`readline-sync`);

let answer = readLine.question("Welcome do you want to know your fortune? y or n: ");
while (answer != "y" && answer != "n"){
    console.log("invalid choice");
    answer = readLine.question("Enter y or n: ");
}
let answer2 = readLine.question("Ask your question: ");



let answerList = ['Yes.', 'Definitely.', 'No.', 'My sources say no.', 'Ask again later.', 'Try again'];

let randomNum = Math.floor(Math.random()*answerList.length);

let randomAnswer = answerList[randomNum];
console.log(randomAnswer)