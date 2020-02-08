// If you want to jumpstart the process of talking to us about this role, 
// here’s a little challenge: write a program that outputs the largest unique 
// set of characters that can be removed from this paragraph without letting 
// its length drop below 50.

// For example: [‘H’, ‘i’, ‘!’, ‘ ’]

function removeUniqueSet(string) {
  let result = []
  let limit = string
  let i = 0
  
  if (string.length < 50) {
    console.log('Input phrase has less than 50 characters.')
    return
  }
  
  while (limit.length > 50) {
    if (!result.includes(string[i])) {
      result.push(string[i])
    }
    limit = limit.slice(1)
    i++
  }
  
  console.log(result)
  console.log(`remaining input length = ${limit.length}`) // verify remaining character count
  // return result
}

let paragraph = 'If you want to jumpstart the process of talking to us about this role, here\'s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.'

removeUniqueSet(paragraph)