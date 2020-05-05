

import renderItem from './form-item'
import renderButton from './form-button'
import { deepCopy, defaultValue } from './utils'


function initOptions(self, opts) {

	let form    = self.form,
			mode    = self.mode,
			options = self.options || {}


	// el-form 属性
	opts.attrs = Object.assign({
		model: self.form,
		inline: mode === 'search',
		size: (self.$ELEMENTJSONFORM || { size: 'small' }).size,
		labelSuffix: (self.$ELEMENTJSONFORM || { labelSuffix: ':' }).labelSuffix,
		labelWidth: mode === 'search' ? '' : (self.$ELEMENTJSONFORM || { labelWidth: '100px' }).labelWidth
	}, options)

	
	// el-form 事件监听
	opts.on = {

		input: (e) => null,
		validate: (e) => self.$emit('validate', e)
	}
}


function renderForm(h) {

	let self = this,
			mode = self.mode,
			node = (self.$ELEMENTJSONFORM || { form: 'el-form' }).form,
			full = (self.$ELEMENTJSONFORM || { fullWidth: true }).fullWidth,
			next = (self.schema || []).map((item) => renderItem.call(this, h, item)),
			opts = {
				ref: 'form',
				staticClass: 'form-create'
			}


	// 增加宽度填充的样式
	if( full ) {

		opts.staticClass += ' form-create-full'
	}

	// 添加组件的自定义属性
	initOptions(self, opts)


	// mode为preview不渲染按钮组
	if( mode !== 'preview' ) {

		next.push(renderButton.call(self, h))
	}


	return h(node, opts, next)
}



export default renderForm