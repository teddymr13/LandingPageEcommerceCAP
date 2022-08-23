function importAll(r) {
	let images = {};
	r.keys().map((item) => {
		return (images[item.replace("./", "")] = r(item));
	});
	return images;
}
const image = importAll(require.context("./assets/images", false, /\.(png|jpe?g|svg|jpg)$/));
export {image};