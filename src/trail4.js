const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const axios = require('axios');

// Replace these values with your Twitter API keys and tokens

const api_key = "nBtJ7wxkRYvFS4QEEGBodN52p"
const api_key_secret = "ZI60NPHbBJgUSJPht9olQT36NtAtTo9FmdimsAG8MRcXLcOjNW"
const apiKey = api_key;
const apiSecret = api_key_secret;
const ACCESS_TOKEN="914857532849614849-8kQeCBYTfdWGRI8St8JoTfcCkfR3xIY"
const ACCESS_TOKEN_SECRET="1Q0CcHTegZmgwY8o7Qv6DyXR9aDtrsdvXiU5VhXnncE44"
const accessToken = ACCESS_TOKEN;
const accessTokenSecret = ACCESS_TOKEN_SECRET;

const oauth = OAuth({
  consumer: {
    key: apiKey,
    secret: apiSecret,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  },
});

// Replace this with your tweet content
const tweetText = 'Hello, Twitter! This is a test tweet.';

const requestData = {
  url: 'https://api.twitter.com/1.1/statuses/update.json?include_entities=true',
  method: 'POST',
  data: {
    status: tweetText,
  },
};

const token = {
  key: accessToken,
  secret: accessTokenSecret,
};

const authorization = oauth.authorize(requestData, token);
console.log('Authorization Header:', oauth.toHeader(authorization), authorization);

  axios({
    method: requestData.method,
    url: requestData.url,
    headers: oauth.toHeader(authorization),
    data: requestData.data, // Use requestData.data directly
  })
    .then(response => {
      console.log('Tweet posted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error posting tweet:', error.response ? error.response.data : error.message);
    });