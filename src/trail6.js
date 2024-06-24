const axios = require('axios');

// Replace these values with your Twitter API keys
const api_key = ""
const api_key_secret = ""
const apiKey = api_key;
const apiSecret = api_key_secret;

// Concatenate API key and API secret with a colon and base64 encode them
const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

// Twitter API endpoint for obtaining a Bearer Token
const tokenEndpoint = 'https://api.twitter.com/oauth2/token';

// Twitter API endpoint for posting a tweet
const tweetEndpoint = 'https://api.twitter.com/2/tweets';

// Your tweet content
const tweetText = 'Hello, Twitter! This is a test tweet.';

// Requesting a Bearer Token
axios.post(tokenEndpoint, 'grant_type=client_credentials', {
  headers: {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
})
  .then(response => {
    const bearerToken = response.data.access_token;

    // Posting a tweet with the obtained Bearer Token
    axios.post(tweetEndpoint, { text: tweetText }, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then(tweetResponse => {
        console.log('Tweet posted successfully:', tweetResponse.data);
      })
      .catch(tweetError => {
        console.error('Error posting tweet:', tweetError.response ? tweetError.response.data : tweetError.message);
      });
  })
  .catch(tokenError => {
    console.error('Error obtaining Bearer Token:', tokenError.response ? tokenError.response.data : tokenError.message);
  });
