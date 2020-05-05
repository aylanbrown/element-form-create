

import Form from './form'





function install(Vue, opt = {}) {


	Vue.prototype.$ELEMENTJSONFORM = {

		// 表单节点
		form: opt.form || 'el-form',
		formItem: opt.formItem || 'el-form-item',
		formButton: opt.formButton || 'el-button',

		// 表单外观
		size: opt.size || 'small',
		fullWidth: opt.fullWidth !== false,
		labelSuffix: opt.labelSuffix || ':',
		labelWidth: opt.labelWidth || '100px',


		// 组件属性
		showDefaultPlaceholder: opt.showDefaultPlaceholder !== false,
		renameProps: Object.assign((opt.renameProps || { class: 'staticClass' }), { name: 'prop' }),
		defaultPlaceholderNode: opt.defaultPlaceholderNode || ['el-input', 'el-autocomplete', 'el-select', 'el-cascader', 'el-time-select', 'el-time-picker', 'el-date-picker']
	}


	Vue.component(Form.name, Form)
}



export default {

	version: '1.0.0',
	Form, install
}