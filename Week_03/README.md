## 学习笔记

### 分治 (Divide & Conquer)
- Divide: 把问题分解成子问题问题
- Conquer: 解决子问题
- Merge: 合并子问题解

#### 分治代码模板
```
// JavaScript
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed

}
```

### 回溯 （Backtracking）
回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程 中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将 取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问 题的答案。

回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种 情况：
- 找到一个可能存在的正确的答案；
- 在尝试了所有可能的分步方法后宣告该问题没有答案。

在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。
