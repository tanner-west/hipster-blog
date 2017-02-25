module.exports = {
	entry: './views/working.html',
	devServer: {
		inline: true,
		contentBase: './views',
		port: 3000
	},
	output: {
		path: '/views',
		filename: 'index.html',
	}
	

};