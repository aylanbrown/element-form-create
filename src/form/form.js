

import renderButton from './form-button'
import renderFormItem from './form-item'
import createFactory from '../utils/factory'



function formOptions(self) {


	let options = {

		ref: 'form',
		staticClass: 'form-create',

		on: {

			// 移除input事件，防止报错
			input: () => null,

			// 触发validate事件
			validate: (e) => self.$emit('validate', e)
		}
	}

	// 是否让特定组件的宽度铺满容器
	if( (self.$ELEMENTJSONFORM || {}).fullWidth !== false ) {

		options.staticClass += ' form-full-width'
	}

	// 合并属性
	options.attrs = Object.assign({

		model: self.form,

		labelSuffix: '：',
		inline: self.mode === 'search',
		labelWidth: self.mode === 'search' ? '' : '100px',

		size: (self.$ELEMENTJSONFORM || {}).size || 'small'

	}, self.options)



	return options
}


function formChildren(h, self) {


	let list = [], schema = self.list, slots = self.$slots.default || []

	// 遍历表单项以生成表单结构
	schema.forEach((item) => {

		// 是否展示表单项，效果同v-if
		let show = createFactory(self, item.name, item.show, true, 'boolean')

		list.push(show ? renderFormItem(h, self, item) : h())
	})

	// 默认插槽
	if( slots.length > 0 ) {

		list = list.concat(slots)
	}

	// 如mode为preview时，不加载按钮项
	if( self.mode !== 'preview' ) {

		renderButton(h, self, list)
	}

	return list
}


function renderForm(h, self) {

	// 默认VNode节点为el-form
	let node = (self.$ELEMENTJSONFORM || {}).form || 'el-form'

	// 渲染函数
	return h(node, formOptions(self), formChildren(h, self))
}


export default renderForm