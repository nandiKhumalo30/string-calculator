
function invalidInputs(string) {
  if(string.match(/-\d/)) {
  throw new Error("ERROR: negatives not allowed " + string.match(/-\d/g))
}
  if (/\/\//.test(string) == true && /\d$/.test(string) == false) {
    throw new Error('ERROR: invalid input')
  } 
  if (string.match(/.+(?=\/\/)/)) {
    throw new Error('ERROR: invalid input')
  }
}

function add(string){
  var numbers = "";
  var delimiter ;
  if (string == "" || string.length == 1) {
    return string * 1
  }
  if (/^[\/\/]/.test(string) && /\d$/.test(string)) {
    delimiter = string.slice(2,string.search("\n"))
    var expression = string.slice(string.search("\n")+1,string.length)
    numbers = expression.split(delimiter)
  } else {
    numbers = string.match(/\d/g)
  }
  if(/\]/.test(delimiter) == true) {
    var delimiterArray = delimiter.match(/(?<=\[).+?(?=\])/g)
    for(var i = 0; i < delimiterArray.length; i++) {
      expression = expression.split(delimiterArray[i]).toString()
    }
    numbers = expression.split(",")
  }
  invalidInputs(string)
  return numbers.filter(function ignore(num){return num < 1000}).reduce((sum,current) => parseInt(sum) + parseInt(current))
}
module.exports = {add}







