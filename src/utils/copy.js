

import is from './is'




function deepCopy(data, freeze = false) {


	if( !is.object(data) && !is.array(data) ) {

		return data
	}

	let copy = is.array(data) ? [] : {}


	Object.keys(data).forEach(key => copy[key] = deepCopy(data[key]))


	return freeze ? Object.freeze(copy) : copy
}



export default deepCopy