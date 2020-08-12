

import is from '../utils/is'
import deepCopy from '../utils/copy'


function submitButton(h, self) {


	let mode = self.mode,
			node = (self.$ELEMENTJSONFORM || {}).button || 'el-button',
			options = {

				attrs: {

					type: 'primary',
					loading: self.loading,
					disabled: self.disabled
				},
				on: {

					click: () => {

						self.$refs.form.validate((valid) => {

							if( valid ) {

								let form = deepCopy(self.form)

								self.$emit('submit', form)
							}
						})
					}
				}
			}

	if( self.showIcon === true ) {

		options.attrs.icon = (mode === 'search' ? self.searchIcon : self.submitIcon)
	}

	return h(node, options, mode === 'search' ? self.searchText : self.submitText)
}


function resetButton(h, self) {


	let node = (self.$ELEMENTJSONFORM || {}).button || 'el-button',
			options = {

				attrs: {

					type: 'default',
					icon: self.resetIcon,
					loading: self.loading,
					disabled: self.disabled
				},
				on: {

					click: () => {

						self.$refs.form.resetFields()

						self.$emit('reset')
					}
				}
			}

	if( self.showIcon === true ) {

		options.attrs.icon = self.resetIcon
	}

	return h(node, options, self.resetText)
}



function renderButton(h, self, children) {


	let list = [],
			button = self.$slots.button || [],
			node = (self.$ELEMENTJSONFORM || {}).formItem || 'el-form-item'
	

	// 确定按钮
	list.push(submitButton(h, self))


	// 是否渲染重置按钮
	if( self.showResetButton === true ) {

		list.push(resetButton(h, self))
	}

	// 插入名为button的具名插槽
	if( is.array(button) && button.length > 0 ) {

		list = list.concat(button)
	}


	children.push(h(node, {}, list))
}



export default renderButton