/**
 * Jinal Chawada
 * 21st June 2020
 */

/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array depending on the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**
 * help()
 * This function returns the Game Instructions
 * Note that if executed in the Developer Tools console the returned string will automatically display,
 * so there is no need to use console.log()
 * @Parameters: none
 * @Return: A string template literal containing game instructions
 */
function help () {
  // Note the string creted below using the backtick ` is a Template literal.
  // You can use multi-line strings and string interpolation in a Template literal.
  return `
  Welcome to Scramble: the game where you unscramble letters to make words.

  Once you start the game, you will be given a scrambled word. 
  If you correctly guess the word, you will receive a point. 
  If you guess incorrectly you will receive a strike. 
  You can also pass on a word. Passing adds the word back to the list. 
  You can pass ${
    game.maxPasses
  } times. After the ${
    game.maxStrikes
  } strikes the game ends.
  
  To start a new game use start().
  To make guess use guess('word').
  To skip a word use pass().
  To show these instructions again use help().
  `
}

/**********************************************
 * YOUR CODE GOES BELOW
 **********************************************/
// Create  word array with 40 or more words

const words = ['dog', 'cat', 'horse', 'lion', 'snake', 'bears', 'tigers','rabbit', 'elephant', 'monkey', 'cattle']
/**
 * Game Object 
 
The game active status
The random list of words
The current word
The current scrambled word : Not required : Tony
The number of strikes
The number of points
The maximum number of allowed strikes
The number of passes used
The maximum number of passes
 */
// the game object
const game = {
  maxStrikes: 3,
  maxPasses: 3,
  word:null,
  words:null,
  active: false,
  strikes: 0,
  points: 0,
  passes: 0,
}

console.log(help())
/** Start Function
 No parameters
Reset all the game status properties
Make a copy of the words array and store it in the game object
Shuffle the words array copy. A shuffle function was provided in the starter files.
Select a word from the shuffled array save to the game object.
Display a scrambled version of the word to the player.
Note : If a game currently active than a new game CANNOT be started.
 */
function getWord(){

}
function start(){
if (!game.active ) { // are we playing a game? 
  game.active = true // no start a new one
}
else{ // Yes, warned a user
  console.warn('You are already playing a game')
}
}
/**'
 Guess Function

Check to see if the guessed word matches the current word unscrambled. Case should NOT matter.
If the words do match the player will receive a point. The word should be removed from the game list (the same word should not appear twice) and the next word should be displayed.
If the words do NOT match the player will receive a strike and the current word will be displayed again.

Note: The player should NOT be able to make guesses if there is no active game
Parameter:  The user guess
 */


 function guess(word){

 }
 /** 
Pass Function
  
Check if player has any passes left
Remove the from the game list (the same word should not appear twice) and the next word should be displayed.
Parameter: No parameters 

Note : The player should NOT be able to pass if there is no active game.
*/

  function pass(){

  }

  /**
   * Additional Notes:
   * 
The game will end if there are no more words in the list OR the player has received the maximum number of strikes
When the game ends the player total points should be displayed.
After the game ends the player should be able to start a new game using the start() function
   */

