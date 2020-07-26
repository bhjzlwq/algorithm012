/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    var subResult = [];
    function combineSub(start,subResult){
        //terminator
        if(subResult.length == k){
            result.push(subResult.slice(0));
            return;
        }
        var len = subResult.length;
        for(var i= start;i<=n-(k-len)+1;i++){
            subResult.push(i);
            combineSub(i+1,subResult);
            subResult.pop();
        }
    }
    combineSub(1,subResult);
    return result;
};
