


import is from '../utils/is'
import deepCopy from '../utils/copy'
import createFactory from '../utils/factory'
import { renameProps, showPlaceholderNode } from '../utils/config'



function showPlaceholder(self, attrs, item, label = '', trigger = 'blur') {

	
	let node = item.node || null,
			show = (self.$ELEMENTJSONFORM || {}).showDefaultPlaceholder, // 获取全局是否展示placeholder的配置
			list = (self.$ELEMENTJSONFORM || {}).showPlaceholderNode || showPlaceholderNode // 展示placeholder的节点


	// 不添加placeholder的情况
	if( show === false || node === null || item.placeholder === false ) {

		return
	}


	/* 
	** node节点有两种情况，字符串和VNode
	**
	** 字符串: 主要体现为el-input、el-select等，但是如果是其他命名的形式无法进行匹配，比如a-input
	** VNode: 主要是按需引入的ElementUI组件，比如Input、Tree等，需要通过组件上的name进行判断 
	**
	** 两种情况均为存在误判的情况，可以通过props或placeholder单独设置
	*/

	if(( is.string(node) && /^el-[a-z\-]+$/.test(node) && list.indexOf(node) > -1 ) || ( is.vNode(node) && node.name && /^El[A-Za-z]+$/.test(node.name) )) {

		attrs.placeholder = `请${ trigger === 'blur' ? '输入' : '选择' }${ label }`
	}
}


function nodeChildren(h, self, item) {

	let next = null,
			children = createFactory(self, item.name, item.children, [], ['string', 'number', 'boolean', 'null', 'symbol'])


	// 如果是数组，则进行递归操作
	if( is.array(children) ) {

		// 设置为子节点
		next = children.map((child) => renderNode(h, self, child))

	} else {

		// 由于Vue.js的createElement(node, options, children)对children的要求是null | array
		// 为了防止非null时出现数据叠加的情况，因此将children直接声明长度为1的数组

		next = [children]
	}

	return next
}


function nodeOptions(self, item, label = null, validate = null) {


	let options = { refInFor: true, attrs: {}, on: {} },
			rename = { ...(self.$ELEMENTJSONFORM || {}).renameProps, ...renameProps }


	// 推入顶层属性
	;['ref', 'key', 'slot', 'class', 'style', 'scope', 'directives'].forEach((key) => {

		if( is.valid(item[ key ]) ) {

			options[ rename[key] || key ] = item[ key ]
		}
	})


	// name是组件与form实现双向数据绑定的要素，可以通过bind取消
	if( is.string(item.name) && is.valid(item.name) && item.bind !== false ) {

		let value = self.form[ item.name ] || null


		// 如form中无对应的键值，则优先检查对象中是否有value属性，如无传入null
		if( is.undefined(value) ) {

			self.form[ item.name ] = item.value || null
		}

		// 为组件添加双向数据绑定的逻辑
		options.model = {

			expression: item.name,
			value: self.form[ item.name ],
			callback: (e) => {

				// 赋值
				self.form[ item.name ] = e

				// 触发Input事件
				self.$emit('input', self.form)

				// 触发change事件
				self.$emit('change', { form: self.form, name: item.name, value: e })

				// 更新视图
				self.$forceUpdate()
			}
		}
	}

	// 判断是否给组件添加placeholder，可通过showDefaultPlaceholder进行控制，仅支持ElementUI的组件
	if( label && validate ) {

		showPlaceholder(self, options.attrs, item, label, (validate || {}).trigger || 'blur')
	}
	

	// 合并属性
	options.attrs = { ...options.attrs, ...createFactory(self, item.name, item.props, {}, 'object') }


	// 重写组件的方法，使其可以提供form、name等相关属性
	if( is.object(item.methods) ) {

		Object.keys(item.methods).forEach((key) => {

			// 禁止写入input事件，防止出现数据覆盖的操作
			if( key !== 'input' ) {

				options.on[ key ] = (e) => item.methods[ key ]({ form: self.form, name: item.name || null, value: e })
			}
		})
	}


	return options
}



function renderNode(h, self, item, label, validate) {

	// 如果本身是VNode节点，直接返回
	if( is.vNode(item) ) return item

	// 自定义渲染函数
	if( is.function(item.render) ) {

		// 允许自定义渲染函数更新form，但item不允许进行更改（可能导致节点重复刷新）
		return item.render({ h, form: self.form, name: item.name || null, item: deepCopy(item, true) })
	}


	// 渲染函数
	return h(item.node || null, nodeOptions(self, item, label, validate), nodeChildren(h, self, item))
}


export default renderNode