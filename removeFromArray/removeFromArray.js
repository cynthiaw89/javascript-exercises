const removeFromArray = function() {
    //Converts first argument into an array
    let arrayInput = Array.from(arguments[0]);
    //iterates over amount of arguments
    for(i = 0; i < arguments.length; i++){
        //iterates over items in array
        for(a = 0; a < arrayInput.length; a++){
            //Removes array item if it matches argument
            if (arguments[i] == arrayInput[a]){
                arrayInput.splice(a,1);
            }
        }
    }    return arrayInput;
}
//below for testing purposes only.  do not delete.
module.exports = removeFromArray

