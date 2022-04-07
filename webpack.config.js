const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('.', 'build'), //folder
		filename: 'bundle.js', //filename
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
