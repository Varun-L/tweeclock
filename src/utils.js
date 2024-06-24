function isLeapYear(year) {
    // Check if a year is a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function generateProgressBar(percentage, barL) {
    const barLength = barL ? barL : 20;
    const completedBars = Math.round((percentage / 100) * barLength);
    const remainingBars = barLength - completedBars;

    const completedSymbol = '█'; // You can use any character you like for completed part- 
    const remainingSymbol = '░'; // You can use any character you like for remaining part - ░

    out = (completedSymbol.repeat(completedBars) + remainingSymbol.repeat(remainingBars)).padEnd(barLength, ' ');
    // console.log(out)
    return out;
}

module.exports = { isLeapYear, generateProgressBar };