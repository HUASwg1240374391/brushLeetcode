<font color=black size=5>6.Z 字形变换<br></font>
<font color=gray>desc:<br></font>
<font color=gray size=3>
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L---C---I---R
E-T-O-E-S-I-I-G
E---D---H---N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);
</font>
<font color=skyblue>示例 1:</font>
<font >
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
</font>
<font color=skyblue>示例 2:</font>
<font background=gray>
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:
L&emsp;&emsp;&emsp;&emsp;D&emsp;&emsp;&emsp;&emsp;R
E&emsp;&emsp;O&emsp;E&emsp;&emsp;I&emsp;&emsp;I
E&emsp;C&emsp;&emsp; I&emsp;H&emsp;&emsp;&emsp;N
T&emsp;&emsp;&emsp;&emsp;S&emsp;&emsp;&emsp;&emsp;G
<font color=black size=3>
思路：</font><font color=gray size=2>
找到步长规律 第一行和最后一行 step=(numRows-1)\*2-i\*2
在循环行数时遍历字符串依次求出每一行对应字符并相加得到最终结果
</font>

```javascript
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) {
    return s
  }

  const step = (numRows - 1) * 2
  const map = Array.from({ length: numRows }).fill('')
  s.split('').forEach((char, index) => {
    const num = index % step

    const charIndex = num < numRows ? num : step - num
    map[charIndex] += char
  })
  return map.join('')
}
```
