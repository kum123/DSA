/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if(!word.includes(ch))  return word;
	
        const index = word.indexOf(ch) +1
        return  word.slice(0, index).split("").reverse().join("") + word.slice(index, word.length)
};