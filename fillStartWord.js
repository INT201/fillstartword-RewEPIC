const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    return (word === null || word === undefined) ? 
            undefined : startWord + (word.startsWith(startWord) ? word.slice(startWord.length) : word)
}
module.exports = fillStartWord
