const repeatString = function() {
    let str = ""
    for(i=-1; i<5; i++){
        str += "hey";
        if(i<0){
            return "ERROR";
        }
    }
    return str;
}

module.exports = repeatString
