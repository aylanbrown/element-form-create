

import { deepCopy } from './utils'


// 重置按钮属性
function resetOptions(self) {

	let opts = {}

	opts.attrs = {
		type: 'default',
		icon: self.resetIcon,
		disabled: self.loading || self.disabled
	}


	opts.on = {

		click() {

			self.$refs.form.resetFields()

			self.$emit('reset')
		}
	}

	return opts
}


// 确定按钮属性
function submitOptions(self) {

	let opts = {},
			form = self.form,
			mode = self.mode

	opts.attrs = {
		type: 'primary',
		loading: self.loading,
		disabled: self.disabled,
		icon: mode === 'search' ? self.searchIcon : self.submitIcon,
	}


	opts.on = {

		click() {

			self.$refs.form.validate((valid) => {

				if( valid ) {

					self.$emit('submit', deepCopy(form))
				}
			})
		}
	}

	return opts
}



function renderButton(h) {

	let next = [],
			self = this,
			mode = self.mode,
			slot = self.$slots,
			opts = { staticClass: 'form-create-button' },
			item = (self.$ELEMENTJSONFORM || { formItem: 'el-form-item' }).formItem,
			node = (self.$ELEMENTJSONFORM || { formButton: 'el-button' }).formButton


	// 如有不具名插槽则直接加载
	if( slot.default ) {

		next = slot.default || []
	}


	if( !slot.default ) {

		// 确定按钮
		next.push(h(node, submitOptions(self), mode === 'search' ? self.searchText : self.submitText))

		// 如显示重置按钮则加载
		if( self.showResetButton ) {

			next.push(h(node, resetOptions(self), self.resetText))
		}

		// 如有具名插槽button则推入
		if( slot.button ) {

			slot.button.forEach(element => next.push(element))
		}
	}


	return h(item, opts, next)
}




export default renderButton