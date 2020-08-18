// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}



// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * In counter2, count is a global variable. The count variable for counter1 can't be accesed outside of the counterMaker function.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses a closure. 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be better in any situation where multiple, independenet counts needed to be held apart. 
 * counter2 would be better if there were multiple functions that would all increase one count. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3);
}

inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, inningSoFar){
  let homeTeam = 0;
  let awayTeam = 0;
  for (let i = 0; i < inningSoFar; i++) {
    homeTeam += inning();
    awayTeam += inning();
  }
  return { 
    Home: homeTeam,
    Away: awayTeam,
  };
}

finalScore(inning, 4);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, inning, allInnings) {
  let round = {};
  let homeTeam = 0;
  let awayTeam = 0;
  for (let i = 0; i < allInnings; i++) {
    // get round scores
    round = getInningScore(inning);

    // apply round scores
    homeTeam += round.Home;
    awayTeam += round.Away;

    // print inning results
    let inningLabel = '';
    if(i === 0){
      inningLabel = '1st';
    } else if (i === 1) {
      inningLabel = '2nd';
    } else if (i === 2) {
      inningLabel = '3rd';
    } else {
      inningLabel = `${i + 1}th`;
    }
    console.log(`${inningLabel} inning: ${homeTeam} - ${awayTeam}`);
  }

  // print final results
  console.log(`Final Score: ${homeTeam} - ${awayTeam}`);
  if (homeTeam > awayTeam) {
    console.log('HOME TEAM WINS!! Drive home safely');
  } else if (homeTeam < awayTeam) {
    console.log('Monty Moles wins. Please don\'t riot');
  } else {
    console.log('No one is happy with a tie. Go break stuff');
  }

}

scoreboard(getInningScore, inning, 9);

//////////////////////////////////


function getInningScore(inning){
  return { 
    Home: inning(),
    Away: inning(),
  };


}