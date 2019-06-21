function maxProduct(nums) {
  let res = -Number.MAX_VALUE;
  let min = 1;
  let max = 1;
  for (let num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];
    res = Math.max(res, max);
  }
  return res;
}

var maxProduct = function(nums) {
  if (nums.length < 1) return 0;
  let max = -Infinity, min = 0, cur = 0;
  for (let n of nums) {
      if (n > 0) {
          min = (min === 0 ? 0 : min * n);
          cur = (cur <=  1 ? n : cur * n);
      } else if (n < 0) {
          let tempMin = min;
          min = (cur <=  1 ? n : cur * n);
          cur = (tempMin === 0 ? n : tempMin * n);
      } else {
          min = 0;
          cur = 0;
      }
      max = Math.max(max, cur);
  }
  return max;
};