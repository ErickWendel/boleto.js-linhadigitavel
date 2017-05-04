const addTrailingZeros = function (string, length) {
  string = string.toString()

  while (string.length < length) {
    string = '0' + string
  }

  return string
}
const formatDate = function (date) {
  return `${addTrailingZeros(date.getDate(), 2)}/${addTrailingZeros(date.getMonth() + 1, 2)}/${date.getFullYear()}`
}
module.exports = {
    addTrailingZeros,
    formatDate
}