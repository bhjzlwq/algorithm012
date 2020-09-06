/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let countingSort = (arr, maxValue) => {
        let bucket = new Array(maxValue).fill(0);
        let arrLen = arr.length;
        for (let i = 0; i < arrLen; i++) {
            bucket[arr[i].charCodeAt() - 97]++;
        }
        for (let j = 0; j < arrLen; j++) {
            if (bucket[arr[j].charCodeAt() - 97] == 1) {
                return j;
            }
        }
        return -1;
    }
    return countingSort(s, 26)
};
