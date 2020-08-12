


const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.conf.js')



const resolve = (src) => path.resolve(__dirname, '..', src)


module.exports = merge(config, {

	mode: 'production',

	entry: {

		index: resolve('src/index.js')
	},

	output: {

		path: resolve('dist'),
		filename: '[name].js',
		libraryTarget: 'umd'
	},

	optimization: {

		minimize: false
	}

})