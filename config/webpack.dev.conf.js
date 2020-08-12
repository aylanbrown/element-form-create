


const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.conf.js')
const HtmlWebpack = require('html-webpack-plugin')



const resolve = (src) => path.resolve(__dirname, '..', src)


module.exports = merge(config, {

	mode: 'development',

	entry: {

		app: resolve('examples/index.js')
	},

	devServer: {

		host: 'localhost',
		port: 5000,
		hot: true,
		hotOnly: false
	},

	plugins: [

		new HtmlWebpack({
		  template: './examples/index.html',
		  filename: 'index.html',
		  inject: 'body'
		})
	]
})