



const path = require('path')
const webpack = require('webpack')
const vueLoaderPlugin = require('vue-loader/lib/plugin')





module.exports = {


	devtool: '#source-map',

	module: {
		
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: ['file-loader']
			}
		]
	},

	plugins: [

		new vueLoaderPlugin(),

		new webpack.DefinePlugin({

			'process.env.VERSION': JSON.stringify(process.env.VERSION)
		})
	]
}