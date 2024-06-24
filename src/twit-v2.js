const Twitter = require('twitter-v2');

const api_key = "nBtJ7wxkRYvFS4QEEGBodN52p"
const api_key_secret = "ZI60NPHbBJgUSJPht9olQT36NtAtTo9FmdimsAG8MRcXLcOjNW"
const ACCESS_TOKEN="914857532849614849-8kQeCBYTfdWGRI8St8JoTfcCkfR3xIY"
const ACCESS_TOKEN_SECRET="1Q0CcHTegZmgwY8o7Qv6DyXR9aDtrsdvXiU5VhXnncE44"


const client = new Twitter({
  consumer_key: api_key,
  consumer_secret: api_key_secret,
  access_token_key: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET,
});

const { data } = client.post('tweets', { status: '1228393702244134912' }).then((res) => console.log);
