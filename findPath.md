<font color=black size=5>面试题.找到指定数据在该对象内的键名集合<br></font>
<font color=gray>desc:<br></font>
<font color=gray size=3>
给定一个多重嵌套对象，找到指定数据的 key 值集合
</font>
<font color=skyblue>示例 1:</font>
<font >

```javascript
let data = { a: { b: { c: { d: 2 } }, _b: {} }, b: {} }
// 数据 2 的位置 a->b->c->d
```

</font>
<font color=black size=3>
思路：</font>
<font color=gray size=2>
遍历key值 与target进行比较不符合则判断当前键值是否为object，是的话则进行递归，同时传递一个字符串用于记录当前路径
</font>

```javascript
function findPath(data, target, path = '') {
  for (let key in data) {
    if (data[key] == target) {
      path += key
      return path
    } else if (typeof data[key] === 'object') {
      return findPath(data[key], target, path + key + '->')
    }
  }
}
```
