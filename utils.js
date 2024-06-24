function isLeapYear(year) {
    // Check if a year is a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

async function postTweet(content) {
    const twitterApiUrl = 'https://api.twitter.com/2/tweets';
    const bearerToken = 'YOUR_TWITTER_BEARER_TOKEN';

    const response = await fetch(twitterApiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            status: content,
        }),
    });

    const responseData = await response.json();
    console.log(responseData);
}

function generateProgressBar(percentage) {
    const barLength = 20;
    const completedBars = Math.round((percentage / 100) * barLength);
    const remainingBars = barLength - completedBars;
  
    const completedSymbol = '█'; // You can use any character you like for completed part- 
    const remainingSymbol = '░'; // You can use any character you like for remaining part
  
    return (completedSymbol.repeat(completedBars) + remainingSymbol.repeat(remainingBars)).padEnd(barLength, ' ');
}

function generateMProgressBar(percentage) {
    const barLength = 30;
    const completedBars = Math.round((percentage / 100) * barLength);
    const remainingBars = barLength - completedBars;
  
    const completedSymbol = '█'; // You can use any character you like for completed part- 
    const remainingSymbol = '·'; // You can use any character you like for remaining part
  
    return (completedSymbol.repeat(completedBars) + remainingSymbol.repeat(remainingBars)).padEnd(barLength, ' ');
}


export { isLeapYear };