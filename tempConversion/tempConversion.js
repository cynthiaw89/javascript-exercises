const ftoc = function(x) {
x = (x - 32) * (5/9);
x= Math.round(x * 10) / 10;
return x;
}

const ctof = function(x) {
x = (x * (9/5)) + 32;
x = Math.round(x * 10) / 10;
return x;
}

module.exports = {
  ftoc,
  ctof
}
