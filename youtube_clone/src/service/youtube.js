import axios from 'axios';

class Youtube {
	constructor(httpClient) {
		this.youtube = httpClient;
	}

	async mostPopular() {
		const response = await this.youtube.get('videos', {
			params: {
				part: 'snippet',
				chart: 'mostPopular',
				maxResults: 25,
			},
		});

		return response.data.items;

		// return fetch(
		// 	`/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&regionCode=KR&key=${this.key}`,
		// 	this.getRequestOptions
		// )
		// 	.then((response) => response.json())
		// 	.then((result) => result.items)
		// 	.catch((error) => console.log('error', error));
	}

	async search(query) {
		const response = await this.youtube.get('search', {
			params: {
				part: 'snippet',
				maxResults: 25,
				type: 'video',
				q: query,
			},
		});
		return response.data.items;
		// return fetch(
		// 	`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.key}`,
		// 	this.getRequestOptions
		// )
		// 	.then((response) => response.json())
		// 	.then((result) =>
		// 		result.items.map((item) => ({ ...item, id: item.id.videoId }))
		// 	)
		// 	.catch((error) => console.log('error', error));
	}
}

export default Youtube;
