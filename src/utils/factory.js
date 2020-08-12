


import is from './is'
import deepCopy from './copy'





function createFactory(self, name = null, valueOrFunction, initialValue = null, dataType = 'null', options = {}) {


	if( is.function(valueOrFunction) ) {

		return valueOrFunction({ h: self.$createElement, form: deepCopy(self.form, true), name, ...options })
	}


	if( dataType !== 'any' && is.fit(valueOrFunction, dataType) ) {

		return valueOrFunction
	}


	return valueOrFunction || initialValue
}


export default createFactory