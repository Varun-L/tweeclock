import { sendTweet } from './timely.js';
import { TwitterApi } from 'twitter-api-v2';
/**
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		if(request.method == 'GET') {
			const twitterClient = TwitterApi();
			const client = twitterClient.readWrite;
			await twitterClient.v2.tweet('Hello, this is a test.');
			console.log(request.method, request.url);
		}else{
			console.log(request,'POST')
		}
		return new Response('Hello world!');
	},
	// async scheduled(event, env, ctx) {
	// 	sendTweet();
	// },
};
