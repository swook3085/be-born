export const leadingZeros = (n: number | string, digits: number) => {
  let zero = ''
  n = n.toString()

  if (n.length < digits) {
    for (var i = 0; i < digits - n.length; i++) zero += '0'
  }
  return zero + n
}
