// import { isLeapYear } from "./utils"



async function handleScheduled(scheduledTime) {
    // Get current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    // Calculate completion percentages
    const totalDaysInMonth = new Date(year, month, 0).getDate();
    const totalDaysInYear = isLeapYear(year) ? 366 : 365;


    const yearStart = new Date(year, 0, 1); // January 1st of the current year
    const daysPassed = Math.ceil((currentDate - yearStart) / (1000 * 60 * 60 * 24));

    const yearProgress = (daysPassed / totalDaysInYear) * 100;

    const monthProgress = (day / totalDaysInMonth) * 100;

    // Generate bar representations
    const yearBar = generateProgressBar(yearProgress);
    const monthBar = generateProgressBar(monthProgress);

    // Post end-of-day tweet
    const endOfDayTweet = `This Year is completed ${day}/${totalDaysInYear} - ${yearProgress.toFixed(2)}% - ${yearBar}\nThis Month is completed - ${day}/${totalDaysInMonth} - ${monthProgress.toFixed(2)}% - ${monthBar}`;
    // await postTweet(endOfDayTweet);

    // Check if it's the middle of the day
    const hour = currentDate.getHours();
    if (hour >= 12 && hour < 18) {
        // Get facts or content based on the day of the week
        const content = await getContentOfDay(currentDate.getDay());
        await postTweet(content);
    }

    // Check if it's 8 AM
    if (hour === 8) {
        // Send words and their meanings
        await sendWordsAndMeanings(currentDate.getDay());
    }
}

// ... (rest of the code remains unchanged)
printProgress()