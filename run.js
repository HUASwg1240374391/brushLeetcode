var combinationSum = function(candidates, target) {
  const res = []
  inner(candidates, target, 0, [], res)
  return res
}

var inner = function(candidates, target, index, nums, res) {
  if (target < 0) return
  if (target === 0) {
    res.push(nums)
    return
  }
  if (index >= candidates.length) return
  inner(candidates, target, index + 1, [...nums], res)
  inner(
    candidates,
    target - candidates[index],
    index,
    [...nums, candidates[index]],
    res
  )
}
