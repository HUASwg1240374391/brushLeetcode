const multiply = function(num1, num2) {
  if (!+num1 || !+num2) return '0'

  const len1 = num1.length - 1
  const len2 = num2.length - 1

  const mulRes = new Array(num1.length + num2.length).fill(0)

  for (let i = len1; i >= 0; i--) {
    for (let j = len2; j >= 0; j--) {
      let mul = num1[i] * num2[j]
      mul += mulRes[i + j + 1]
      mulRes[i + j] += parseInt(mul / 10)
      mulRes[i + j + 1] = mul % 10
    }
  }

  while (mulRes[0] === 0) {
    mulRes.shift()
  }

  return mulRes.join('')
}
