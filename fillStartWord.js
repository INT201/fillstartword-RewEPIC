const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    return (word === null || word === undefined) ? 
            undefined : (word.startsWith(startWord) ? startWord + word.slice(startWord.length) : startWord + word)
}
module.exports = fillStartWord
