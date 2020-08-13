



const is = {


	type: (data) => {

		return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$1')
	},

	fit: (data, type) => {


		let str = is.type(data).toLowerCase()


		if( is.array(type) ) {

			type = type.map((i) => i.toLowerCase())

			return type.indexOf(str) > -1
		}

		
		return str === type.toLowerCase()
	},

	same: (data, copy) => {

		return is.type(data) === is.type(copy)
	},

	vNode: (data) => is.fit(data, 'object') && is.fit(data.tag, 'string'),

	valid: (data) => data !== '' || !isNaN(data) || data !== null || data !== undefined,

	string: (data) => Object.prototype.toString.call(data) === '[object String]',

	number: (data) => Object.prototype.toString.call(data) === '[object Number]' && isFinite(data),

	boolean: (data) => Object.prototype.toString.call(data) === '[object Boolean]',

	null: (data) => Object.prototype.toString.call(data) === '[object Null]',

	undefined: (data) => Object.prototype.toString.call(data) === '[object Undefined]',

	symbol: (data) => Object.prototype.toString.call(data) === '[object Symbol]',

	array: (data) => Object.prototype.toString.call(data) === '[object Array]',

	object: (data) => Object.prototype.toString.call(data) === '[object Object]',

	function: (data) => Object.prototype.toString.call(data) === '[object Function]',

	date: (data) => Object.prototype.toString.call(data) === '[object Date]',

}







export default is