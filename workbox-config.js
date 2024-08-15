module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};