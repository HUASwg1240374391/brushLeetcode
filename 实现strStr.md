<font color=black size=5>28.实现 strStr<br></font>
<font color=gray>desc:<br></font>
<font color=gray size=3>
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 -1。

</font>
<font color=skyblue>示例 1:</font>
<font >
输入: haystack = "hello", needle = "ll"
输出: 2
</font>
<font color=skyblue>示例 2:</font>
<font background=gray>
输入: haystack = "aaaaa", needle = "bba"
输出: -1
<font color=black size=3>
思路：</font><font color=gray size=2>
KMP算法 或者直接使用indexOf
以下解答AC 62/74 待完善 
</font>
```javascript
var strStr = function(haystack, needle) {
  if (!needle || haystack === needle) {
    return 0
  }
  haystack = haystack.split('')
  needle = needle.split('')
  let start = haystack.indexOf(needle[0])
  let end = haystack.lastIndexOf(needle[needle.length - 1])
  if (start === -1 || end === -1 || start > end) {
    return -1
  }
  for (let i = 0; i < haystack.length; ) {
    for (let j = 0; j < needle.length; ) {
      if (haystack[i] === needle[j]) {
        if (j === needle.length - 1) {
          return i - j
        }
        j++
        i++
      } else {
        i++
        j = 0
      }
      if (i >= haystack.length) {
        return -1
      }
    }
  }
  return -1
}
let result = strStr('mississippi', 'issip')
console.log(result) 
// 预期：4
// 输出：-1

```

```
