const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
    return !word ? undefined : startWord + (word.startsWith(startWord) ? word.slice(startWord.length) : word)
}
module.exports = fillStartWord
