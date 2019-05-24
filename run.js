const isMatch = (s, p) => {
  return s === (s.match(new RegExp(p)) ? s.match(new RegExp(p))[0] : null)
}
