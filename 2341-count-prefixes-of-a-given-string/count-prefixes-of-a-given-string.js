/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    
//     let sum=0;
// for( let i=0; i<words.length ;i++){
// if(s.startsWith(words[i])){
// sum++
// }
// }
// return sum
return words.filter((x) => s.startsWith(x)).length;
};