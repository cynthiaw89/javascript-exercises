const sumAll = function(x,y) {
        // create variable to hold answer
        let sum;
    // checks if x or y is NaN or negative
    if(Number.isNaN(x) === true || Number.isNaN(y) === true || x < 0 || y < 0){
        return "ERROR";
    }
    //set sum to smallest number
    else if (x < y) {
      sum = x;
        while (x < y) {
            //while x is smaller than y, add 1, and  add it to sum
          x++;
          sum += x;
        }
        return sum;
      }
    else if (x > y) {
        sum = y;
          while(x > y){
            y++;
            sum += y;
          }
        return sum;
      } 
      // Catches undefined
    else{
        return "ERROR";
    }
}
module.exports = sumAll
