

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
		size: ({ ...{ size: 'small' }, ...self.$ELEMENTJSONFORM }).size,
		labelSuffix: ({ ...{ labelSuffix: '：' }, ...self.$ELEMENTJSONFORM }).labelSuffix,
		labelWidth: mode === 'search' ? '' : ({ ...{ labelWidth: '100px' }, ...self.$ELEMENTJSONFORM }).labelWidth
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
			node = ({ ...{ form: 'el-form' }, ...self.$ELEMENTJSONFORM }).form,
			full = ({ ...{ fullWidth: true }, ...self.$ELEMENTJSONFORM }).fullWidth,
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