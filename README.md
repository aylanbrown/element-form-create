

# Element-Form-Create

Element-Form-Create是以Vue.js + ElementUI开发的动态表单组件，可以兼容大部分ElementUI的表单组件；同时支持局部引入组件、表单联动、嵌套表单、表单验证等功能。


### 环境要求

- Vue.js 2.5.0 +
- ElementUI 2.8.0 +

### 安装
```
// npm
npm install element-form-create

// yarn
yarn add element-form-create
```

### 引入


```javascript

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import FormCreate from './template'


import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)

// 在ElementUI之后引入，如ElementUI为局部引入，则可以通过第二个参数配置局部组件
Vue.use(FormCreate, {
	// 表单节点
	form: 'el-form',
	formItem: 'el-form-item',
	formButton: 'el-button',

	// 表单外观
	size: 'small',
	fullWidth: true,
	labelSuffix: ':',
	labelWidth: '100px',


	// 组件属性
	showDefaultPlaceholder: true,
	renameProps: { class: 'staticClass', name: 'prop' },
	defaultPlaceholderNode: ['el-input', 'el-autocomplete', 'el-select', 'el-cascader', 'el-time-select', 'el-time-picker', 'el-date-picker']
})



new Vue({
  render: h => h(App),
}).$mount('#app')

```

### 代码示意
```javascript
<template>
	<form-create v-model="form" :schema="schema" @submit="handleSubmit" />
</template>
<script>

	import { DatePicker } from 'element-ui'

	export default {
		data() {
			return {
				form: {
					name: '张三',
					gender: 1,
					birthday: ''
				},
				schema: [
					{ itemRender: () => <p>人员信息</p> },
					{ node: 'el-input', label: '姓名', name: 'name',
					  validate: { required: true }
					},
					{ node: 'el-select', label: '性别', name: 'gender',
					  validate: { required: true, type: 'number', trigger: 'change' },
					  children: [
					  	{ node: 'el-option', props: { label: '男', value: 1 } },
					  	{ node: 'el-option', props: { label: '女', value: 2 } },
					  ]
					},
					{ node: DatePicker, label: '出生日期', name: 'birthday',
					  validate: { required: true, trigger: 'change' },
					  props: { type: 'date', valueFormat: 'yyyy-MM-dd' }
					},
					{ node: 'el-radio-group', label: '是否已婚', name: 'isMarried'
					  isShow: ({ form }) => form.gender === 2,
					  validate: { trigger: 'change' },
					  children: () => {
					  	let list = [
					  		{ label: '是', value: 1 },
					  		{ label: '否', value: 0 }
					  	]
					  	return list.map((i) => <el-radio :label="i.value">{ i.label }</el-option>)
					  }
					}
				]
			}
		},
		methods: {
			handleSubmit(form) {
				console.log(form)
			}
		}
	}
</script>
```

### 组件属性

<table>
	<thead>
		<tr>
			<td>参数</td>
			<td>说明</td>
			<td>类型</td>
			<td>可选值</td>
			<td>默认值</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>value</td>
			<td>表单数据对象</td>
			<td>object</td>
			<td>/</td>
			<td>/</td>
		</tr>
		<tr>
			<td>schema</td>
			<td>表单结构数组</td>
			<td>array</td>
			<td>/</td>
			<td>[]</td>
		</tr>
		<tr>
			<td>options</td>
			<td>el-form表单属性 <a href="https://element.eleme.cn/#/zh-CN/component/form#form-attributes" target="_blank">文档</a></td>
			<td>object</td>
			<td>/</td>
			<td>{}</td>
		</tr>
		<tr>
			<td>mode</td>
			<td>表单模式，search对应行内表单，preview不展示按钮</td>
			<td>string</td>
			<td>submit/search/preview</td>
			<td>submit</td>
		</tr>
		<tr>
			<td>loading</td>
			<td>是否加载中，仅控制表单自带的按钮</td>
			<td>boolean</td>
			<td>true/false</td>
			<td>false</td>
		</tr>
		<tr>
			<td>disabled</td>
			<td>是否禁用，仅控制表单自带的按钮</td>
			<td>boolean</td>
			<td>true/false</td>
			<td>false</td>
		</tr>
		<tr>
			<td>full-width</td>
			<td>表单组件是否铺满，仅在el-form添加class=form-create-full</td>
			<td>boolean</td>
			<td>true/false</td>
			<td>true</td>
		</tr>
		<tr>
			<td>submit-text</td>
			<td>表单提交按钮文本</td>
			<td>string</td>
			<td>/</td>
			<td>提交</td>
		</tr>
		<tr>
			<td>submit-icon</td>
			<td>表单提交按钮图标</td>
			<td>string</td>
			<td>/</td>
			<td>el-icon-finished</td>
		</tr>
		<tr>
			<td>reset-text</td>
			<td>重置按钮文本</td>
			<td>string</td>
			<td>/</td>
			<td>重置</td>
		</tr>
		<tr>
			<td>reset-icon</td>
			<td>重置按钮图标</td>
			<td>string</td>
			<td>/</td>
			<td>el-icon-refresh-right</td>
		</tr>
		<tr>
			<td>show-reset-button</td>
			<td>是否展示重置按钮</td>
			<td>boolean</td>
			<td>true/false</td>
			<td>true</td>
		</tr>
		<tr>
			<td>search-text</td>
			<td>搜索按钮文本</td>
			<td>string</td>
			<td>/</td>
			<td>搜索</td>
		</tr>
		<tr>
			<td>search-icon</td>
			<td>搜索按钮图标</td>
			<td>string</td>
			<td>/</td>
			<td>el-icon-search</td>
		</tr>
	</tbody>
</table>


### schema 属性
<table>
	<thead>
		<tr>
			<td>参数</td>
			<td>说明</td>
			<td>类型</td>
			<td>默认值</td>
		</tr>
		<tr>
			<td>node</td>
			<td>虚拟DOM节点</td>
			<td>string/VNode</td>
			<td>div</td>
		</tr>
		<tr>
			<td>label</td>
			<td>表单项名</td>
			<td>string/function({ form, name })</td>
			<td>''</td>
		</tr>
		<tr>
			<td>name</td>
			<td>表单项键，也是双向数据绑定的开关及键</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>props</td>
			<td>DOM节点属性</td>
			<td>object/function({ form, name })</td>
			<td>{}</td>
		</tr>
		<tr>
			<td>validate</td>
			<td>表单验证对象集合</td>
			<td>object/function({ form, name })</td>
			<td>{}</td>
		</tr>
		<tr>
			<td>message</td>
			<td>表单验证错误提醒</td>
			<td>object/function({ form, name })</td>
			<td>{}</td>
		</tr>
		<tr>
			<td>isShow</td>
			<td>是否展示表单项</td>
			<td>boolean/function({ form, name })</td>
			<td>true</td>
		</tr>
		<tr>
			<td>children</td>
			<td>DOM节点子级，可通过itemMultiple设置为嵌套表单，multiple为多子级节点</td>
			<td>array/function({ form, name })</td>
			<td>[]</td>
		</tr>
		<tr>
			<td>render</td>
			<td>表单节点渲染函数</td>
			<td>function(h, { form, name })</td>
			<td></td>
		</tr>
		<tr>
			<td>multiple</td>
			<td>是否为多子级节点</td>
			<td>boolean/function({ form, name })</td>
			<td>false</td>
		</tr>
		<tr>
			<td>key</td>
			<td>组件key</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>ref</td>
			<td>组件ref</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>class</td>
			<td>组件class属性</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>slot</td>
			<td>组件slot</td>
			<td>string</td>
			<td></td>
		</tr>
		<tr>
			<td>style</td>
			<td>组件style</td>
			<td>string/object</td>
			<td></td>
		</tr>
		<tr>
			<td>itemMultiple</td>
			<td>是否为嵌套表单</td>
			<td>boolean/function({ form, name })</td>
			<td>false</td>
		</tr>
		<tr>
			<td>itemProps</td>
			<td>表单项el-form-item的props属性</td>
			<td>object/function({ form, name })</td>
			<td>{}</td>
		</tr>
		<tr>
			<td>itemRender</td>
			<td>表单项渲染函数</td>
			<td>function(h, { form, name })</td>
			<td></td>
		</tr>
		<tr>
			<td>itemOptions</td>
			<td>表单项组件属性，包括key, ref, slot, class, style</td>
			<td>{}</td>
			<td></td>
		</tr>
	</thead>
</table>

### 组件事件
<table>
	<thead>
		<tr>
			<td>参数</td>
			<td>说明</td>
			<td>类型</td>
		</tr>
		<tr>
			<td>submit</td>
			<td>表单验证通过后触发的提交事件</td>
			<td>function(form)</td>
		</tr>
		<tr>
			<td>reset</td>
			<td>表单重置事件</td>
			<td>function</td>
		</tr>
		<tr>
			<td>validate</td>
			<td>表单验证事件</td>
			<td>function(callback(boolean, object))</td>
		</tr>
	</thead>
</table>

### 组件方法
<table>
	<thead>
		<tr>
			<td>参数</td>
			<td>说明</td>
			<td>类型</td>
		</tr>
		<tr>
			<td>submit</td>
			<td>表单验证通过后触发的提交事件</td>
			<td>function(form)</td>
		</tr>
		<tr>
			<td>reset</td>
			<td>表单重置事件</td>
			<td></td>
		</tr>
		<tr>
			<td>ref</td>
			<td>引用schema用ref标记的节点</td>
			<td></td>
		</tr>
		<tr>
			<td>get</td>
			<td>用于获取表单内的值</td>
			<td>function(key, value)</td>
		</tr>
		<tr>
			<td>set</td>
			<td>用于获设置表单内的值</td>
			<td>function(key, value)</td>
		</tr>
	</thead>
</table>