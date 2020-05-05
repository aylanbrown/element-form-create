

import renderNode from './form-node'
import { isString, isNumber, isBoolean, isRegexp, isFunction, isVNode, deepCopy, defaultValue } from './utils'


function renderRules(self, item) {


	let rules    = [],
			label    = item.label || '',
			message  = item.message,
			trigger  = item.trigger,
			validate = item.validate


	if( isBoolean(validate.required) ) {

		rules.push({
			trigger,
			required: validate.required,
			message: message.required || `请${ trigger === 'blur' ? '输入' : '选择' }${ label }`
		})
	}

	if( isString(validate.type) ) {

		rules.push({
			trigger,
			type: validate.type,
			message: message.type || `${ label }格式错误`
		})
	}

	if( isRegexp(validate.pattern) ) {

		rules.push({
			trigger,
			pattern: validate.pattern,
			message: message.pattern || `${ label }格式错误`
		})
	}

	if( isNumber(validate.min) && !isNumber(validate.max) ) {

		rules.push({
			trigger,
			min: validate.min,
			message: message.min || `请输入${ validate.min }字以上的${ label }`
		})
	}

	if( !isNumber(validate.min) && isNumber(validate.max) ) {

		rules.push({
			trigger,
			max: validate.max,
			message: message.max || `请输入${ validate.min }字以内的${ label }`
		})
	}

	if( isNumber(validate.min) && isNumber(validate.max) ) {

		rules.push({
			trigger,
			min: validate.min,
			max: validate.max,
			message: message.range || `请输入长度在${ validate.min }-${ validate.max }字的${ label }`
		})
	}

	if( isFunction(validate.validator) ) {

		rules.push({
			trigger,
			validator: (r, v, cb) => validate.validator({ form: deepCopy(self.form, true), rule: r, value: v, callback: cb })
		})
	}


	return rules
}


function initOptions(self, item, opts) {

	let option = item.itemOptions || {},
			rename = (self.$ELEMENTJSONFORM || { class: 'staticClass' }).renameProps

	item.label = defaultValue(item.label, { form: deepCopy(self.form, true), name: item.name }, '')
	item.message = defaultValue(item.message, { form: deepCopy(self.form, true), name: item.name }, {})
	item.validate = defaultValue(item.validate, { form: deepCopy(self.form, true), name: item.name }, {})

	item.trigger = item.validate.trigger || 'blur'

	// 添加表单项属性
	;['key', 'ref', 'slot', 'class', 'style'].forEach((key) => {

		if( option[key] ) {

			opts[ rename[key] || key ] = option[key]
		}
	})

	// 表单项特有属性
	;['label', 'name'].forEach((key) => {

		if( item[key] ) {

			opts.attrs[ rename[key] || key ] = item[key]
		}
	})


	// 当表单项的name存在时，才会生成表单验证的逻辑
	if( item.name ) {

		opts.attrs.rules = renderRules(self, item)
	}

	item.itemProps = defaultValue(item.itemProps, { form: deepCopy(self.form, true), name: item.name }, {})

	opts.attrs = { ...opts.attrs, ...item.itemProps }
}


function renderFormItem(h, item) {

	let next = [],
			self = this,
			opts = { attrs: {} },
			node = (self.$ELEMENTJSONFORM || { formItem: 'el-form-item' }).formItem


	// 添加组件的自定义属性
	initOptions(self, item, opts)

	// 嵌套表单
	if( item.itemMultiple === true ) {

		item.children.forEach((child) => next.push(renderFormItem.call(this, h, child)))
	}

	// 多子级
	if( item.multiple === true ) {

		item.children.forEach((child) => next.push(renderNode.call(this, h, child)))
	}

	// 单节点
	if( !item.itemMultiple && !item.multiple ) {

		next.push(renderNode.call(this, h, item))
	}


	return h(node, opts, next)
}


function renderItem(h, item) {

	// 表单项是否展示
	let show = defaultValue(item.isShow, { form: deepCopy(self.form, true), name: item.name }, true)

	// 不展示直接返回null
	if( show === false ) return null


	if( isVNode(item) ) return item


	if( isFunction(item.itemRender) ) {

		return item.itemRender(h, { form: this.form, name: item.name })
	}


	return renderFormItem.call(this, h, item)
}


export default renderItem