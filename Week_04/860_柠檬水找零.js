/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let num5 = 0, num10 = 0;
  for( let i = 0; i < bills.length; i++ ) {
    if ( bills[i] === 5 ){
      num5++;
    } else if ( bills[i] === 10 ){
      if (num5 === 0){
        return false;
      } else {
        num10++;
        num5--;
      }
    } else {
      if ( num10 === 0 ) {
        if ( num5 < 3 ) {
          return false
        } else {
          num5 -= 3;
        }
      } else {
        if ( num5 === 0 ) {
          return false;
        } else {
          num5--;
          num10--;
        }
      }
    }
  }
  return true;
};

