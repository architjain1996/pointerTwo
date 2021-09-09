var readLineSync = require("readline-sync");
const chalk=require("chalk")
var userName = readLineSync.question("What is your name ? ");

console.log("Welcome, "+userName+". How well do you know 'Udaipur'");
highScore={
  Name:"Archit Jain",
  Score:2
};
var score=0;
questionList=[{
  question:"Where is Udaipur? ",
  answer:"Rajasthan"
},
{
  question:"What is Udaipur famous for? ",
  answer:"Lakes"
},
{ 
  question:"Who is the raja of Udaipur? ",
  answer:"Arvind Singh Mewar"
},
{ 
  question:"Where does he live? ",
  answer:"City Palace"
},
{ 
  question:"Who was the most powerfull ruler of Udaipur? ",
  answer:"Maharana Pratap"
}];
function printScore(scoreNumber)
{
  if(scoreNumber<0)
  {
    console.log(chalk.red("Current Score : "+scoreNumber));
  }
  else
  {
    console.log(chalk.green("Current Score : "+scoreNumber));
  }
  if(scoreNumber>3)
  {
    console.log(chalk.green("Great!! You are promoted to level 2."));
  }
}
function play(question,answer){
  var userAnswer=readLineSync.question(chalk.blue(question));
  if(answer.toUpperCase()===userAnswer.toUpperCase())
  {
    console.log(chalk.green("Correct Answer !!!"));
    score=score+1;

  }
  else
  {
    console.log(chalk.red("You have made a mistake"));
    score=score-1;
  }
}

for(var i=0;i<questionList.length;i++){
  play(questionList[i].question,questionList[i].answer);
  printScore(score);
}
console.log("Final Score : "+score);

if(score>=highScore.Score){
    console.log("High Score : "+highScore.Score);
    highScore.Name=userName;
    highScore.Score=score;
    console.log(chalk.magentaBright("You have scored the highest.!!"));
    console.log(chalk.magentaBright("New high Score Name : "+highScore.Name));
    console.log(chalk.magentaBright("New High Score : "+highScore.Score));
}