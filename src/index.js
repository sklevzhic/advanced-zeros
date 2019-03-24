module.exports = function getZerosCount(number, base) {
  for (let i = 2; i <= base; i++)  {
    if (base % i == 0) {
        base /= i;
        pow = 1;
  
            while (base % i == 0) {
                base /= i;
                pow++;
            }
  
        count = 0;
        innerRes = number;
     
            while (innerRes > 0) {
                innerRes  = Math.floor(innerRes / i);
                count += innerRes ;
            }

        result = Math.floor(count / pow);
}

}

return result;
}

