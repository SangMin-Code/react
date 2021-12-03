class ImageUploader {
	constructor() {
		this.thumbnailPreset =
			process.env.REACT_APP_CLOUDINARY_THUMBNAIL_PRESET;
		this.picturesPreset = process.env.REACT_APP_CLOUDINARY_PICTURES_PRESET;
	}

	async upload(file) {
		const data = new FormData();
		data.append('file', file);
		data.append('upload_preset', this.thumbnailPreset);
		const result = await fetch(
			'https://api.cloudinary.com/v1_1/dxf74aval/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		return await result.json();
	}

	async uploadfiles(files) {
		const filesInfo = [];
		const fileList = Object.values(files);
		for await (const file of fileList) {
			const data = new FormData();
			data.append('file', file);
			data.append('upload_preset', this.picturesPreset);
			try {
				const result = await fetch(
					'https://api.cloudinary.com/v1_1/dxf74aval/image/upload',
					{
						method: 'POST',
						body: data,
					}
				);
				const jsonResult = await result.json();
				filesInfo.push(jsonResult);
			} catch (error) {
				throw new Error(error);
			}
		}
		return filesInfo;
	}
}
export default ImageUploader;
