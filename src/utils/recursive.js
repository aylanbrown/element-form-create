


import is from '../utils/is'
import deepCopy from './copy'



function recursive(form, schema) {

	schema.forEach((item) => {

		if( is.string(item.name) ) {

			form[ item.name ] = (is.array(item.value) || is.object(item.value)) ? deepCopy(item.value) : ( item.value !== undefined ? item.value : null )
		}

		if( is.array(item.children) )  {

			recursive(form, item.children)
		}
	})
}




export default recursive