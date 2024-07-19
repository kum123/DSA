/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
                   
                function mapStr(str) {
                        let map = {};
                        for(let char of str){
                            if(map[char]){
                                map[char] = map[char] + 1;
                            } else {
                                map[char] = 1;
                            }
                        }
                        return map;
                }
                let str1 = mapStr(s);
                let str2 = mapStr(t);
                let str = s.length > t.length ? s : t;
                    for(let char of str){
                        if(str1[char] !== str2[char]){
                            return false;
                        }
                    }
            return true;
};