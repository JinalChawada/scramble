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

// the game object
const game = {
  maxStrikes: 3,
  maxPasses: 3
}

console.log(help())
