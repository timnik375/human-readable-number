module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 10) {
        return ones[number]
    }

    if (number < 20) {
        return tens[number - 10]
    }

    if (number < 100) {
        if (number%10 === 0) {
            return dozens[(number/10) - 2]
        } else {
            return dozens[Math.floor(number/10) - 2] + ' ' + ones[number%10]
        }
    }

    if (number < 1000) {
        if (number%100 === 0) {
            return ones[number/100] + ' ' + 'hundred'
        } else {
            if (number%100 < 10) {
                return ones[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + ones[number%100]
            } else if (number%100 < 20) {
                return ones[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + tens[number%100 - 10]
            } else {
                if (number%10 === 0) {
                    return ones[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + dozens[Math.floor(number%100/10) - 2]
                } else {
                    return ones[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + dozens[Math.floor(number%100/10) - 2] + ' ' + ones[number%10]
                }
            }
        }
    }
}
