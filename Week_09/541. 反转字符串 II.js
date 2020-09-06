
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    return Array.from(
        { length: s.length / (2 * k) + 1 },
        (item, index) => s.slice(index * 2 * k, (index + 1) * 2 * k)
    )
        .map(item => [...item.slice(0, k)].reverse().join('') + item.slice(k))
        .join('')
};
