var multiply = function(str1, str2) {
  if (!str1 || !str2) {
    return 0
  }
  let arr1 = str1.split('').reverse()
  let arr2 = str2.split('').reverse()
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let current = parseInt(arr1[i] * arr2[j])
      let ten = Math.floor(current / 10)
      let one = current % 10
      console.log(`ten: ${ten} one: ${one}`)
      if (!result[i]) {
        result[i + j] = 0
      }
      let carry = (result[i + j] += one)
      result[i + j] = carry % 10
      result[i + j + 1] += ten + Math.floor(carry / 10)
    }
  }
  console.log(result)
  return result.join('')
}
let result = multiply('123', '456')
console.log(result)
