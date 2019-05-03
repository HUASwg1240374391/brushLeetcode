<font color=black size=5>567.字符串的排列<br></font>
<font color=gray>desc:<br></font>
<font color=gray size=3>
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
换句话说，第一个字符串的排列之一是第二个字符串的子串。
</font>
<font color=skyblue>示例1:</font>
<font >
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
</font>
<font color=skyblue>示例2:</font>
<font background=gray>
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
</font>
```javascript
  const checkInclusion = (s1, s2) => {
    let letters = Array(26).fill(0)
    let sub = Array(26).fill(0)
    for (let i = 0; i < s1.length; i++) {
        let code = s1.charCodeAt(i) - 97
        letters[code]++
    }
    for (let i = 0; i < s2.length; i++) {
        if (i >= s1.length) {
        sub[s2.charCodeAt(i - s1.length) - 97]--
        }
        sub[s2.charCodeAt(i) - 97]++

        if (i >= s1.length - 1 && letters.every((v, i) => v === sub[i])) {
        return true
        }
    }
    return false
}
```