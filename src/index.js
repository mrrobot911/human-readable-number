module.exports = function toReadable (number) {
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const res = [];
if (number === 0) return 'zero'
if (Math.floor(number / 100)){ res.push(ones[Math.floor(number / 100)] + ' hundred')}
if (Math.floor(number / 10) % 10 === 1){ res.push(teens[Math.floor(number % 10)])}
if (Math.floor(number / 10) % 10 !== 1 && Math.floor(number / 10) % 10 !== 0){ res.push(tens[Math.floor(number / 10) % 10])}
if (number % 10 && Math.floor(number / 10) % 10 !== 1) { res.push(ones[number % 10])}
return res.join(' ').trim()
}