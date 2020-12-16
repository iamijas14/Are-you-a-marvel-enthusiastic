var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
//_______________________________//


console.log(chalk.bgRed.underline.bold.italic.blueBright(" ‎⍟ ⎊ ⧗ ✇ ‎४_____AVENGERS ASSEBLE!_____⍟ ⎊ ⧗ ✇ ‎४ "));
console.log(chalk.yellowBright("\n###____A FUN QUIZ ON "+chalk.bgWhite.yellow.bold("MARVEL'S AVENGERS.")+"____###"));
console.log();
var playerName = readlineSync.question("ENTER YOUR NAME: ");
console.log(chalk.redBright("WELCOME " +chalk.bold.underline.cyanBright(playerName)+ ",YOU'RE AN AVENGER NOW!"));
console.log();
console.log(chalk.bgGray.whiteBright("HERE IS YOUR QUESTIONS. ALL THE BEST "));
console.log();
//_______________________________//


function quiz(question,answer)
{
  var playerAnswer = readlineSync.question(chalk.whiteBright.bold(question));
  if(playerAnswer===answer)
    {
      console.log("\n" +chalk.bgGreenBright.bold("You are right!!")+ "⍟");
      score = score+2;
    }
  else
    {
      console.log("\n" +chalk.bgRedBright.bold("Dude, you're embarrassing me in front of the wizards."));
    }
  console.log(chalk.underline("Your current score: ")+chalk.bgMagentaBright.bold(score)+ " ");
  console.log("|︽✵︽|︽✵︽|︽✵︽|︽✵︽|︽✵︽|︽✵︽|︽✵︽|");
  console.log();
}
//_______________________________//


var avengersGame = 
[
  {
    question: "1) What was the first film in the Marvel Cinematic Universe? \n"+
              "A: Avengers endgame \n"+
              "B: Iron man(2008) \n"+
              "C: Captain america the first avenger \n"+
              "D: Superman vs Batman \n\n"+
              "Type your option:"+" ",
    answer: "B"
  },
  {
    question: "2) who was the first avenger? \n"+
              "A: Captain America \n"+
              "B: Loki \n"+
              "C: Drax \n"+
              "D: Captain marvel \n\n"+
              "Type your option:"+" ",
    answer: "A"
  },
  {
    question: "3) What weapon does Captain America use? \n"+
              "A: A spear \n"+
              "B: A shield \n"+
              "C: A lasso \n"+
              "D: An Americarang \n\n"+
              "Type your option:"+" ",
    answer: "B"
  },
  {
    question: "4) Who is the most intelligent avenger? \n"+
              "A: Thor \n"+
              "B: Thanos \n"+
              "C: Ironman \n"+
              "D: Bruce Banner \n\n"+
              "Type your option: "+" ",
    answer: "C"
  },
  {
    question: "5) What agency does Nick Fury run? \n"+
              "A: S.H.I.E.L.D. \n"+
              "B: S.W.O.R.D. \n"+
              "C: H.A.M.M.E.R. \n"+
              "D: S.P.E.A.R. \n\n"+
              "Type your option: "+" ",
    answer: "A"
  },
  {
    question: "6) who is the god of mischief? \n"+
              "A: Odin \n"+
              "B: Hela \n"+
              "C: Loki \n"+
              "D: Hulk \n\n"+
              "Type your option: "+" ",
    answer: "C"
  },
  {
    question: "7) who is the strongest Avenger? \n"+
              "A: Hulk \n"+
              "B: Captain marvel \n"+
              "C: hawkeye\n"+
              "D: God of thunder \n\n"+
              "Type your option: "+" ",
    answer: "D"
  },
  {
    question: "8) In the 2011 movie, The Avengers features Captain America. What is his real name?\n"+
              "A: Buck Rogers \n"+
              "B: Steve Rogers \n"+
              "C: Tony Stark \n"+
              "D: Ted Rogers \n\n"+
              "Type your option: "+" ",
    answer: "B"
  },
  {
    question: "9) What is Clint Barton's superhero name?\n"+
              "A: Black Panther \n"+
              "B: Iron Man \n"+
              "C: Thor \n"+
              "D: Hawkeye \n\n"+
              "Type your option: "+" ",
    answer: "D"
  },
  {
    question: "10) In Avengers: Infinity War, what is the name of the villain who's on a mission to collect the infinity stones?\n"+
              "A: Thanos \n"+
              "B: Darren Cross \n"+
              "C: Malekith \n"+
              "D: Helmut Demo \n\n"+
              "Type your option: "+" ",
    answer: "A"
  },

];
//_______________________________//


for(var i=0;i<avengersGame.length;i++)
{
  var marvel = avengersGame[i];
  quiz(marvel.question,marvel.answer)
}
//_______________________________//


console.log(chalk.greenBright.bold("HOORAY!! YOU SCORED " +score ,"out of 20"));
console.log(chalk.bold.cyanBright("\nTHANKYOU "+playerName+" FOR PARTICIPATING IN THE QUIZ ᛤ"));