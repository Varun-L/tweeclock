const {getTweetLength, parseTweet} = require('twitter-text');
var tweet = "As of Mon,29 Jan 2024 06:45:23 GMT -\nYear Progress: 7.79% - 29/366\n█░░░░░░░░░░░░░░░░░░░░░░░░░\nMonth Progress: 91.97% - 29/31\n██████████████████░░\nWeek Progress: 14.29% - 1/7\n█░░░░░░\nDay Progress: 51.07%\n██████░░░░░░";
console.log(getTweetLength(tweet))
console.log(parseTweet(tweet))