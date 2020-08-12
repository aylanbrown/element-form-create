


import is from '../utils/is'



function recursive(form, schema) {

	schema.forEach((item) => {

		if( is.string(item.name) ) {

			form[ item.name ] = item.value || null
		}

		if( is.array(item.children) )  {

			recursive(form, item.children)
		}
	})
}




export default recursive