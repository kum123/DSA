/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    

           
//    if (!wordList.includes(endWord)) {
//         return 0;
//     }
    
//     const wordSet = new Set(wordList);
//     const dp = {};
//     dp[beginWord] = 1;

//     const queue = [beginWord];

//     while (queue.length > 0) {
//         const currentWord = queue.shift();

//         for (let i = 0; i < currentWord.length; i++) {
//             const wordArray = currentWord.split('');
//             for (let j = 0; j < 26; j++) {
//                 wordArray[i] = String.fromCharCode(97 + j); // Generating new words by changing one character
//                 const newWord = wordArray.join('');

//                 if (wordSet.has(newWord) && !dp.hasOwnProperty(newWord)) {
//                     dp[newWord] = dp[currentWord] + 1;
//                     if (newWord === endWord) {
//                         return dp[newWord];
//                     }
//                     queue.push(newWord);
//                 }
//             }
//         }
//     }

//     return 0;

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
                
                // and replace the char with letters from [a - z]
                for(let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
                    
                    // if the new word exist in the word list add it to the queue
                    if(wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0;    

};