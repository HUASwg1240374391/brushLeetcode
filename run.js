var merge = function(intervals) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((a, b) => {
      if (a.length === 0) return [b]
      let i = a.length - 1
      if (a[i][1] >= b[0]) {
        if (a[i][1] > b[1]) return a
        a[i] = [a[i][0], b[1]]
      } else {
        a.push(b)
      }
      return a
    }, [])
}
