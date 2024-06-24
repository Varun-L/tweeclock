const { Client, auth } = require("twitter-api-sdk");

const api_key = ""
const api_key_secret = ""
const bearer_token="%3DSQXziSLw4iOKlGOS2SsesnZU9pYKrJLTUkfjKaGCgVrmQbhgBV"
const oauth_2_client = "";
const oauth_2_client_secret = "-";
const ACCESS_TOKEN="914857532849614849"

const auth_client = new auth.OAuth2User({
    access_token: ACCESS_TOKEN,
    client_id: oauth_2_client,
    client_secret: oauth_2_client_secret,
    callback: "twitter-bot..workers.dev",
    scopes:["tweet.read", "tweet.write"]
})
const client = new Client(auth_client);

client.tweets.createTweet({
    text:"Hello World"}).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });


