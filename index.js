import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';
dotenv.config();

const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS,
  accessSecret: process.env.ACCESS_SECRET,
});

const price = (await (await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')).json()).bitcoin.usd;
const total = price * 50000;
const change = (total - 3000000000) / total * 100;

const tweet = `Germany's bitcoin value if they didn't jeet 
in dollars: ${new Intl.NumberFormat('en-US').format(total)}$
in percentages: ${change > 0 ? '+' : ''}${change.toPrecision(1)}%`;
await twitterClient.v2.tweet(tweet);