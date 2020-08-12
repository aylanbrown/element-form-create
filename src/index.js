


import Form from './form/index.vue'
import { renameProps, showPlaceholderNode } from './utils/config'




Form.install = function(Vue, options = {}) {


	Vue.prototype.$ELEMENTJSONFORM = {

		// 表单节点
		form: options.form || 'el-form',
		button: options.button || 'el-button',
		formItem: options.formItem || 'el-form-item',

		// 表单外观
		size: options.size || 'small',
		fullWidth: options.fullWidth !== false,
		labelSuffix: options.labelSuffix || ':',
		labelWidth: options.labelWidth || '100px',


		// 组件属性
		renameProps: { ...options.renameProps, ...renameProps },
		showDefaultPlaceholder: options.showDefaultPlaceholder !== false,
		showPlaceholderNode: options.showPlaceholderNode || showPlaceholderNode
	}

	Vue.component(Form.name, Form)
}




export default Form