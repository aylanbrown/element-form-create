

import renderNode from './form-node'
import { isString, isNumber, isBoolean, isRegexp, isFunction, isVNode, deepCopy, defaultValue } from './utils'


function renderRules(self, item) {


	let rules    = [],
			label    = defaultValue(item.label, { form: deepCopy(self.form, true), name: item.name }, ''),
			message  = defaultValue(item.message, { form: deepCopy(self.form, true), name: item.name }, {}),
			validate = defaultValue(item.validate, { form: deepCopy(self.form, true), name: item.name }, {}),
			trigger  = validate.trigger || 'blur'


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
			rename = ({ ...{ renameProps: { name: 'prop', scope: 'scopedSlots' }}, ...self.$ELEMENTJSONFORM }).renameProps


	// 添加表单项属性
	;['key', 'ref', 'slot', 'class', 'scope', 'style'].forEach((key) => {

		if( option[key] ) {

			opts[ rename[key] || key ] = option[key]
		}
	})

	// 表单项特有属性
	opts.attrs.label = defaultValue(item.label, { form: deepCopy(self.form, true), name: item.name }, '')


	if( item.name ) {

		opts.attrs.prop = item.name

		// 当表单项的name存在时，才会生成表单验证的逻辑
		opts.attrs.rules = renderRules(self, item)
	}
	

	opts.attrs = { ...opts.attrs, ...defaultValue(item.itemProps, { form: deepCopy(self.form, true), name: item.name }, {}) }
}


function renderFormItem(h, item) {

	let next = [],
			self = this,
			opts = { attrs: {} },
			node = ({ ...{ formItem: 'el-form-item' }, ...self.$ELEMENTJSONFORM }).formItem


	// 添加组件的自定义属性
	initOptions(self, item, opts)

	// 嵌套表单
	if( item.itemMultiple === true ) {

		item.children.forEach((child) => next.push(renderFormItem.call(self, h, child)))
	}

	// 多子级
	if( item.multiple === true ) {

		item.children.forEach((child) => next.push(renderNode.call(self, h, child)))
	}

	// 单节点
	if( !item.itemMultiple && !item.multiple ) {

		next.push(renderNode.call(self, h, item))
	}

	return h(node, opts, next)
}


function renderItem(h, item) {

	let self = this,
			show = defaultValue(item.isShow, { form: deepCopy(self.form, true), name: item.name }, true)

	// 不展示直接返回空节点
	if( show === false ) return h()


	if( isVNode(item) ) return item


	if( isFunction(item.itemRender) ) {

		return item.itemRender(h, { form: self.form, name: item.name })
	}


	return renderFormItem.call(self, h, item)
}


export default renderItem