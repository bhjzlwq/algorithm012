## 学习笔记

### 深度优先搜索(DFS) 代码模板
``` javascript
  const visited  = new Set();
  const dfs = node => {
    if(visited.has(node)) return ;

    visited.add(node);
    dfs(node.left);
    dfs(node.right);
  }
```
### 广度优先搜索(BFS)

``` javascript
const bfs = (root) => {
  let result = [], queue = [root];

  while(queue.length > 0) {
    let level = [], n = queue.length;
    for(let i = 0; i < n; i++){
      let node = queue.pop();
      level.push(node.val);
      if(node.left) queue.unshift(node.left);
      if(node.right) queue.unshift(node.right);
    }
    result.push(level)
  }
  return result;
}
```

### 二分查找
``` javascript
let left = 0, right = len(array) -1;
while(left <= right) {
  let mid = (left + right) >> 1;
  if(arry[mid] === target) {
    return;
  }else if(array[mid] < target) {
    left = mid + 1;
  }else {
    right = mid - 1;
  }
}
```
