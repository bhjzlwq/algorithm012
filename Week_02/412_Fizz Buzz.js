/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = []
  for (let i = 1; i < n + 1; i++) {
    let ans = ''
    ans += i % 3 ? '' : 'Fizz'
    ans += i % 5 ? '' : 'Buzz'
    if (!ans) {
      ans += i
    }
    result.push(ans)
  }
  return result
};
