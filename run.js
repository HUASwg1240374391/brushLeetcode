var mySqrt = function(x) {
  if (!x) {
    return 0
  }
  let tem = Math.floor(0 + x) / 2

  while (1) {
    let middle = tem
    let result = tem * tem
    if (result >= x) {
      if (
        result === x ||
        ((tem + 1) * (tem + 1) > x && (tem - 1) * (tem - 1) < x)
      ) {
        return tem
      } else {
        tem = (0 + tem) / 2
      }
    } else if (result < x) {
      tem = (tem + middle) / 2
    }
  }
}
console.log(mySqrt(8))
