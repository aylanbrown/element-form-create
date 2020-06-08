

import { isString, isObject, isFunction, isVNode, isOrigin, deepCopy, defaultValue } from './utils'


const isElementNode = (str) => isString(str) && /^el-[a-z\-]+$/.test(str)

const isElementComponent = (node) => isObject(node) && node.name && /^El[A-Za-z]+$/.test(node.name)



function initOptions(self, item, opts) {

	let rename = ({ ...{ renameProps: { name: 'prop', scope: 'scopedSlots' }}, ...(self.$ELEMENTJSONFORM || {}) }).renameProps,
			$props = defaultValue(item.props, { form: deepCopy(self.form, true), name: item.name }, {})


	// 添加表单节点属性
	;['key', 'ref', 'slot', 'scope', 'class', 'style'].forEach((key) => {

		if( item[key] ) {

			opts[ rename[key] || key ] = item[key]
		}
	})


	// 给组件添加双向数据绑定
	if( item.name && item.multiple !== true ) {

		opts.model = {

			expression: item.name,
			value: self.form[ item.name ],
			callback: (e) => {

				self.form[ item.name ] = e

				self.$emit('input', self.form)
				self.$forceUpdate()
			}
		}
	}


	// 加载占位文本
	if( self.$ELEMENTJSONFORM.showDefaultPlaceholder ) {

		initPlaceholder(item.node, opts.attrs, item.label, ({ ...{ trigger: 'blur' }, ...item.validate }).trigger, self.$ELEMENTJSONFORM.defaultPlaceholderNode || [])
	}


	// 合并自定义属性
	opts.attrs = { ...opts.attrs, ...$props }


  // 重写组件方法并赋值
	if( isObject(item.methods) ) {

		for( let key in item.methods ) {

			if( item.methods.hasOwnProperty(key) && key !== 'input' ) {

				opts.on[ key ] = (e) => item.methods[key]({ form: self.form, name: item.name, value: e })
			}
		}
	}
}


function initPlaceholder(node = 'div', attrs, label = '', trigger, node_list) {


	// 异步引入的ElementUI组件，直接读取组件props是否有placeholder属性
	if( isElementComponent(node) && ( node.props || {} ).hasOwnProperty('placeholder') ) {

		attrs.placeholder = `请${ trigger === 'blur' ? '输入' : '选择' }${ label }`
	}

	// defaultPlaceholderNode中声明的组件
	if( isString(node) && node_list.indexOf(node) > -1 ) {

		attrs.placeholder = `请${ trigger === 'blur' ? '输入' : '选择' }${ label }`
	}
}


function renderNode(h, item) {


	if( isVNode(item) ) return item


	if( isFunction(item.render) ) {

		return item.render(h, { form: this.form, name: item.name })
	}

	let self = this,
			next = null,
			node = item.node || 'div',
			opts = { attrs: {}, on: {} }


	// 节点属性
	initOptions(self, item, opts)


	// 基础数据类型
	if( isOrigin(item.children) ) {

		next = item.children || self.form[ item.name ] || null
	}


	// 子级为函数
	if( isFunction(item.children) ) {

		next = defaultValue(item.children, { form: deepCopy(self.form, true), name: item.name }, []).map((child) => renderNode.call(this, h, child))
	}

	// 子级为数组
	if( Array.isArray(item.children) ) {

		next = item.children.map((child) => renderNode.call(this, h, child))
	}


	return h(node, opts, next)
}


export default renderNode