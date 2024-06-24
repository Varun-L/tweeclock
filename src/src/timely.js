import { isLeapYear, generateProgressBar } from "./utils";
const OAuth = require('oauth-1.0a')

async function sendTweet(){
    let tweet = getTimeUpdates();

    const CONSUMER_KEY = 'YOUR_CONSUMER_KEY';
    const CONSUMER_SECRET = '';

    const oauth = OAuth({
        consumer: {
            key: CONSUMER_KEY,
            secret: CONSUMER_SECRET,
        },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            return crypto.createHmac('sha1', key).update(base_string).digest('base64');
        },
    });

    const request_data = {
        url: 'https://api.twitter.com/2/tweets',
        method: 'POST',
        data: { status: 'Hello Ladies + Gentlemen, a signed OAuth request!' },
    };
    const token = {
        key: ACCESS_TOKEN,
        secret: ACCESS_TOKEN_SECRET,
    };
    
    request({
        url: request_data.url,
        method: request_data.method,
        headers: oauth.toHeader(oauth.authorize(request_data, token)),
    }, function (error, response, body) {
        // Process your data here
        console.log(body);
    });
    // send the above request_data using oauth with fetch function instead of request

    fetch(request_data.url, {
        method: request_data.method,
        headers: oauth.toHeader(oauth.authorize(request_data, token)),
        body: JSON.stringify(request_data.data),
    }).then((response) => {
        console.log(response);
    })

    const response = await fetch(request_data.url, {
        method: request_data.method,
        headers: oauth.toHeader(oauth.authorize(request_data, token)),
        body: JSON.stringify(request_data.data),
    });
    const data = await response.json();
    console.log(data);
    

}

function getTimeUpdates(date1) {
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

    return out.join('\n')
}

module.exports = { sendTweet };