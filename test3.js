function printProgress(date1) {
    let out = []
    const now = date1 ? new Date(date1) : new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();

    // Year progress
    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year + 1, 0, 1);
    const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;
    const daysPassed = Math.ceil((now - startOfYear) / (1000 * 60 * 60 * 24));
    const totalDays = isLeapYear(year) ? 366 : 365;
    out.push(`Year Progress: ${yearProgress.toFixed(2)}% - ${daysPassed}/${totalDays}`);
    out.push(generateProgressBar(yearProgress, 50));

    // Month progress
    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 1);
    const totalDaysInMonth = new Date(year, month, 0).getDate();
    const monthProgress = ((now - startOfMonth) / (endOfMonth - startOfMonth)) * 100;
    out.push(`Month Progress: ${monthProgress.toFixed(2)}% - ${date}/${totalDaysInMonth}`);
    out.push(generateProgressBar(monthProgress, 30));


    // Week progress
    let dayOfWeek = day;
    dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek; // Adjust so Monday is 1 and Sunday is 7
    const weekProgress = ((dayOfWeek) / 7) * 100;
    out.push(`Week Progress: ${weekProgress.toFixed(2)}% - ${day == 0 ? 7 : day + 1}/7`);
    out.push(generateProgressBar(weekProgress, 7));

    // Day progress
    const startOfDay = new Date(year, month, date);
    const endOfDay = new Date(year, month, date + 1);
    const dayProgress = ((now - startOfDay) / (endOfDay - startOfDay)) * 100;
    out.push(`Day Progress: ${dayProgress.toFixed(2)}%`);
    out.push(generateProgressBar(dayProgress, 12));

    console.log(out.join('\n'))
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

function isLeapYear(year) {
    // Check if a year is a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
printProgress()