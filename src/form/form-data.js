


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


function dataFormat(self) {

	let form = {}, schema = self.schema

	recursive(form, schema)

	self.form = form

	self.$emit('input', self.form)
}

export default dataFormat