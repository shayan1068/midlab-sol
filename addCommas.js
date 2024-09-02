function addCommas(number) {
    const [integerPart, decimalPart] = number.toString().split(".");
  
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    const result = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  
    console.log(result); // Print the result to the console
  
    return result;
  }
  
  module.exports = addCommas;
  