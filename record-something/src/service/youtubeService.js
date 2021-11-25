class YoutubeService {
	constructor(APIkey) {
		this.key = APIkey;
		this.getRequestOptions = {
			method: 'GET',
			redirect: 'follow',
		};
	}

	async search(query) {
		return fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&regionCode=KR&type=video&key=${this.key}&q=${query}`,
			this.getRequestOptions
		)
			.then((response) => response.json())
			.then((response) => response.items)
			.catch((error) => console.log(error));
	}
}

export default YoutubeService;
