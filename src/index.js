module.exports = function multiply(first, second) {
 
  // let result = "";   //первые 3
  // result += first*second;
  // return result;

  let magicalLetter = "n";
  first += first+magicalLetter;
  first = +first;
  second += second+magicalLetter;
  second = +second;
  result =+ first * second;
  return result;
  
}
