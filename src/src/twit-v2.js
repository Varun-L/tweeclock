const Twitter = require('twitter-v2');

const api_key = ""
const api_key_secret = ""
const ACCESS_TOKEN="-"
const ACCESS_TOKEN_SECRET=""


const client = new Twitter({
  consumer_key: api_key,
  consumer_secret: api_key_secret,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET,
});

const { data } = client.post('tweets', { status: 'asdad' }).then((res) => console.log);
