class ImageUploader {
	constructor(api_key) {
		this.API_KEY = api_key;
	}

	async upload(file) {
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', 'qdtbqm0p');
		const result = await fetch(
			'https://api.cloudinary.com/v1_1/dxf74aval/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		return await result.json();
	}

	// async delete(id, signautre, version) {
	// 	const data = new FormData();
	// 	data.append('public_id', id);
	// 	data.append('api_key', this.API_KEY);
	// 	data.append('signautre', signautre);
	// 	data.append('timestamp', version);
	// 	const result = await fetch(
	// 		'https://api.cloudinary.com/v1_1/dxf74aval/image/destroy',
	// 		{
	// 			method: 'POST',
	// 			body: data,
	// 		}
	// 	);
	// 	return await result.json();
	// }
}

export default ImageUploader;
