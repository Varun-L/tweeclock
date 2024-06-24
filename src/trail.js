const { Client, auth } = require("twitter-api-sdk");

const api_key = "wMzWxNpfPBk3aGis4ilgiwoIX"
const api_key_secret = "cj46ddgy9RP1VJ3NQWFliVDEgc0Oy0OocpdrBBcg1pG9LqSeCW"
const bearer_token="AAAAAAAAAAAAAAAAAAAAAJ4YsAEAAAAAf4LwaMQjCddiyqEh3F6I5oI28XU%3DSQXziSLw4iOKlGOS2SsesnZU9pYKrJLTUkfjKaGCgVrmQbhgBV"
const oauth_2_client = "SGNwbk1DS21Jdy1fOXZEeG11UWo6MTpjaQ";
const oauth_2_client_secret = "QPuNoceDw2c9i1k_qO-TDvWYE2ZiRpoSpNPrldmaUhxC4NmYyp";
const ACCESS_TOKEN="914857532849614849-lVPnwnJiPYRZWds9d0cdFTAwfNW9GbH"

const auth_client = new auth.OAuth2User({
    access_token: ACCESS_TOKEN,
    client_id: oauth_2_client,
    client_secret: oauth_2_client_secret,
    callback: "twitter-bot.varun-codeq.workers.dev",
    scopes:["tweet.read", "tweet.write"]
})
const client = new Client(auth_client);

client.tweets.createTweet({
    text:"Hello World"}).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });


