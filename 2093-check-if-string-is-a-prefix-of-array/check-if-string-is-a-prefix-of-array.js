/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
            let str = s;
            for(let i=0; i < words.length;i++){
                    let eachWord = words[i];
                    
                if(str.slice(0,eachWord.length) != eachWord){
                     return false;
                   
                }else{
                    str = str.slice(eachWord.length);
                      if(str.length == 0) return true;
                }
            }
            if(str.length == 0) return true;
            return false;
};