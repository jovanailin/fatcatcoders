const random = (min, max) => {
  if(isNaN(min) || isNaN(max)) return("error: input parameter is not a number")
  return Math.floor(Math.random() * (max - min) + min)
}

const minIntegerFromArray = (array) => {
  let numbers = array.filter((item)=>{
    return !isNaN(item)
  })
  if(numbers.length==0) return ("error: no numbers in the array")
  return Math.min(...numbers)
}

const functions = module.exports = {random, minIntegerFromArray}
