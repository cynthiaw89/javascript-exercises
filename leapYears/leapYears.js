const leapYears = function(x) {
//if not divisible by 4, fail
if((x / 4) % 1 != 0){
    return false;
}
//if divisible by 100 and not divisible by 400 fail
else if((x/100) % 1 == 0 && (x/400) % 1 != 0){
    return false;
}
else {
    return true;
}
}

module.exports = leapYears
