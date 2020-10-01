module.exports = function toReadable(number) {
    const numbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['one-digit','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const hundred = numbers[Math.floor(number / 100)];
    const ten = tens[Math.floor(number / 10)];
    const decade = Math.floor((number % 100) / 10);
    const remainder = number % 100;
    const remainderTen = number % 10;
    if (number < 20) {
        return numbers[number];
    }
    if (number < 100) {
        if (remainderTen === 0) {
          return `${ten}`
        } else return `${ten} ${numbers[number % 10]}`
    }
    if (remainderTen === 0 && remainder !== 0) {
            return `${hundred} hundred ${tens[decade]}`;
    } else if (remainderTen === 0) {
        return `${hundred} hundred`
    }
    if (remainder < 20) {
       return `${hundred} hundred ${numbers[remainder]}`
    } else {
        return `${hundred} hundred ${tens[decade]} ${numbers[remainderTen]}`
    }
}