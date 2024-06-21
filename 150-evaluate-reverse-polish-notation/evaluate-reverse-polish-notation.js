/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
//                 let stack = [];
//                 for(let i=0; i < tokens.length;i++){
//                         if(isOperator(tokens[i])){
//                             let y = stack.pop();
//                             let x = stack.pop();
//                             let val = calculate(x,y,tokens[i]);
//                         stack.push(val);
//                         } else {
//                         stack.push(Number(tokens[i]));
//                         }
                    
//                     }
//         return stack.pop();
//         function isOperator(str){
                
//                   let len = str.length;
                       
//                       str = Number.isNaN(str) || (Number) ? str.charAt(0) : str; 
//            // console.log(str) 
//             if( str == "/" || str == "+" || str == "-" || str == "*"){
//                         return true;
//                     }  
//             return false;

//             }

//         function calculate(x,y,operator){
//                             let val;
//                         if(operator == "/"){
//                             val = Math.floor(x/y);
//                         } else  if(operator == "*"){
//                         val =x *y;
//                             } else if(operator == "+"){
//                             val = x + y;
//                         } else {
                            
//                              val = x - y;
//                         }
     
//                 return val;
//             }


 const stack = [];
  
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop()+stack.pop());
    } else if (token === '-') {
      stack.push(-stack.pop()+stack.pop());
    } else if (token === '*') {
      stack.push(stack.pop()*stack.pop());
    } else if (token === '/') {
      stack.push(Math.trunc(1/stack.pop()*stack.pop()));
    } else {
      stack.push(parseInt(token));
    }
  }
  
  return stack[0];
};