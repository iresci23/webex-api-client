// This returns a xml builder with our settings
const xml2js = require('xml2js');

module.exports = (rootName) => {
	return new xml2js.Builder({
		headless: true,
		renderOpts: {
			pretty: false
		},
		rootName
	});
}
