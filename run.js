var subsets = function(nums) {
  let len = nums.length
  if (len === 0) return [[]]

  let result = []
  function dfs(n, descison = []) {
    if (descison.length === n) return result.push(descison)
    dfs(n, descison.concat(true))
    dfs(n, descison.concat(false))
  }

  dfs(len)

  return result.map(arr => {
    let tmp = []
    arr.forEach((flag, index) => {
      console.log(flag, index)
      if (flag) tmp.push(nums[index])
    })
    return tmp
  })
}
let result = subsets([1, 2, 3])
// console.log(result)
