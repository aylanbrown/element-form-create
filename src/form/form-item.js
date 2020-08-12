


import is from '../utils/is'
import deepCopy from '../utils/copy'
import renderNode from './form-node'
import createFactory from '../utils/factory'
import { renameProps } from '../utils/config'





function renderRules(self, name = null, label, validate, message) {

	let rules = [],
			trigger = validate.trigger || 'blur' // 默认触发事件为blur，同时placeholder会根据trigger判断提示语为输入还是选择


	// async-validator通过range属性实现数值范围的验证
	// 因此当min和max同时存在时，直接合并两者
	if( is.number(validate.min) && is.number(validate.max) ) {

		validate.range = [validate.min, validate.max]

		delete validate.min
		delete validate.max
	}


	// 遍历validate中的属性以生成对应的验证规则
	Object.keys(validate).forEach((key) => {

		// trigger为触发时机，不存在单独的验证规则
		// 由于validator本身为函数，同时涉及到表单联动机制，需要单独配置

		if( ['trigger', 'validator'].indexOf(key) === -1 ) {

			rules.push({

				trigger, [key]: validate[key],

				// 优先使用message内的错误提示语，其次使用默认
				message: message[key] || `请${ trigger === 'blur' ? '输入' : '选择' }${ label }`
			})
		}
	})


	// 对validator的参数进行改写，使其可以额外获取到form集合
	if( is.function(validate.validator) ) {

		rules.push({

			trigger,
			validator: (r, v, cb) => validate.validator({ form: deepCopy(self.form, true), name, value: v, callback: cb })
		})
	}

	return rules
}



function formItemOptions(self, item, label, validate, message) {


	let attrs = {},
			options = { refInFor: true },
			itemOptions = createFactory(self, name, item.itemOptions, {}, 'object'),
			rename = { ...(self.$ELEMENTJSONFORM || {}).renameProps, ...renameProps }


	// 推入顶层属性
	;['ref', 'key', 'slot', 'class', 'style', 'directives'].forEach((key) => {

		if( is.valid(itemOptions[ key ]) ) {

			options[ rename[key] || key ] = itemOptions[ key ]
		}
	})


	// 推入label
	if( is.valid(label) ) {

		attrs.label = label
	}

	// 如name值存在，说明与form存在双向数据绑定，同时也是表单验证的前提
	if( is.string(item.name) && is.valid(item.name) ) {

		attrs.prop = item.name
		attrs.rules = renderRules(self, item.name, label, validate, message)
	}

	// 合并属性
	options.attrs = Object.assign(attrs, createFactory(self, name, item.itemProps, {}, 'object'))


	return options
}


function formItemChildren(h, self, item, label, validate) {


	let next = null
			

	// 开启多子节点嵌套
	if( item.multiple === true ) {

		// 多子节点嵌套时，直接遍历children属性
		let children = createFactory(self, item.name, item.children, [], 'array')

		// 设置为子节点
		next = children.map((child) => renderNode(h, self, child, createFactory(self, child.name, child.label, '', 'string'), validate))

	} else {

		// 由于Vue.js的createElement(node, options, children)对children的要求是null | array
		// 为了防止非null时出现数据叠加的情况，因此将children直接声明长度为1的数组

		// 声明VNode节点则进入下一个流程
		if( is.valid(item.node) || is.function(item.render) ) {

			next = [ renderNode(h, self, item, label, validate) ]

		} else {

			// 未声明VNode节点时，按照form -> children -> value的顺序尝试对节点填充内容

			// 如name存在时，尝试从form中提取有效的对应键值
			if( is.string(item.name) && item.name && is.valid(self.form[ item.name ]) ) {

				next = [ self.form[ item.name ] ]
			}

			// children为基本数据类型(除了undefined)和工厂函数时时可直接使用
			if( is.fit(item.children, ['string', 'number', 'boolean', 'null', 'symbol', 'function']) ) {

				next = [ createFactory(self, item.name, item.children, null, ['string', 'number', 'boolean', 'null', 'symbol']) ]
			}

			// value权重最高
			if( is.fit(item.value, ['string', 'number', 'boolean', 'null', 'symbol']) ) {

				next = [ item.value || null ]
			}
		}
	}

	return next
}


function renderFormItem(h, self, item) {

	// 如果本身是VNode节点，直接返回
	if( is.vNode(item) ) return item

	// 自定义渲染函数
	if( is.function(item.itemRender) ) {

		// 允许自定义渲染函数更新form，但item不允许进行更改（可能导致节点重复刷新）
		return item.itemRender({ h, form: self.form, name: item.name || null, item: deepCopy(item, true) })
	}


	let next = null

	// 默认VNode节点为el-form-item
	let node = (self.$ELEMENTJSONFORM || {}).formItem || 'el-form-item'

	// 工厂方法封装
	let func = (key, initialValue, type) => createFactory(self, name, item[ key ], initialValue, type)

	// FormItem与表单节点都需要使用到label和validate属性，因此先进行处理 
	let label = func('label', '', 'string'), message = func('message', {}, 'object'), validate = func('validate', {}, 'object')


	// 如itemMultiple为true，则直接渲染children内的节点，用以实现嵌套表单
	if( item.itemMultiple === true ) {

		let children = createFactory(self, item.name, item.children, [], 'array')

		// 渲染子节点
		next = children.map((child) => renderFormItem(h, self, child))
		
	} else {

		// 非嵌套表单渲染逻辑
		next = formItemChildren(h, self, item, label, validate)
	}


	// 默认渲染函数
	return h(node, formItemOptions(self, item, label, validate, message), next)
}


export default renderFormItem