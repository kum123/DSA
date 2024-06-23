/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
     if (t.length > s.length) return '';
    
    const neededChars = {};
    
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(neededChars).length;
    let substring = '';
    
    while (right < s.length) {
        const rightChar = s[right];
        neededChars[rightChar]--;
        if (neededChars[rightChar] === 0) neededLength--;
        
        while (neededLength === 0) {
            if (!substring || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
            
            const leftChar = s[left];
            // If the leftChar in charMap is at exactly 0 before being 
            // incremented, we now need more leftChars so that its count
            // in charMap goes down to exactly 0
            if (neededChars[leftChar] === 0) {
                neededLength++;
            }
            neededChars[leftChar]++;
            left++;
               
        }
        
        right++;
    }
    
    return substring;



    // if (s === t) {
    //     return s;
    // }  
    // let ans = "";
    // const mapT = new Map(); // frequency of t
    // for (const ch of t) {
    //     mapT.set(ch, (mapT.get(ch) || 0) + 1);
    // }

    // let mct = 0; // match count
    // const dmct = t.length; // desired match count
    // const mapS = new Map();
    // let i = -1;
    // let j = -1;

    // while (true) {
    //     let f1 = false;
    //     let f2 = false;

    //     // Acquire the character
    //     while (i < s.length - 1 && mct < dmct) {
    //         i++;
    //         const ch = s[i];
    //         mapS.set(ch, (mapS.get(ch) || 0) + 1);

    //         if (mapS.get(ch) <= mapT.get(ch) || 0) {
    //             mct++;
    //         }
    //         f1 = true;
    //     }

    //     // Collect answers and release
    //     while (j < i && mct === dmct) {
    //         j++;
    //         const pans = s.substring(j, i + 1); // pans = potential answer
    //         if (ans.length === 0 || pans.length < ans.length) {
    //             ans = pans;
    //         }

    //         const ch = s[j];
    //         if (mapS.get(ch) === 1) {
    //             mapS.delete(ch);
    //         } else {
    //             mapS.set(ch, mapS.get(ch) - 1);
    //         }

    //         if ((mapS.get(ch) || 0) < (mapT.get(ch) || 0)) {
    //             mct--;
    //         }
    //         f2 = true;
    //     }
    //     if (!f1 && !f2) {
    //         break;
    //     } 
    // }
    // return ans;

};