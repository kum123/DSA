/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {


    // The time complexity is O(N * M * 26) where
    // N = number of words,
    // M = length of each word
    // technically you can drop the 26 since its a constant

    if (!wordList.includes(endWord)) {
        return 0;
    }
    const wordSet = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;

    while(queue.length) {
        const next = [];
        
        // loop over each word in the queue
        for(let word of queue) {
            if(word === endWord) return steps;
            
            // loop over each char of the word 
            for(let i = 0; i < word.length; i++) {
                console.log("word",word,)
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
														/* it will form the new word by replacing a to z with the different positions  begin , middle and end */
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
													console.log("newWord",newWord,i,j,String.fromCharCode(j + 97));
												// we will push to the new array and it will be helpfull to find next nearest word
                        next.push(newWord);
/* the found word is not required to keep wordSet and it's easy to find remaining steps and it will avoid making conflict with exist words */
                        wordSet.delete(newWord);
                    }
                }
            }
        }

        queue = next;
        steps++;
    }

return 0;    

};