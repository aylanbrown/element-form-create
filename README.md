

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
import FormCreate from 'element-form-create'


import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)

// 在ElementUI之后引入，如ElementUI为局部引入，则可以通过第二个参数配置局部组件
Vue.use(FormCreate, {
	// 表单节点
	form: 'el-form',
	button: 'el-button',
	formItem: 'el-form-item',

	// 表单外观
	size: 'small',
	fullWidth: true,
	labelSuffix: ':',
	labelWidth: '100px',


	// 组件属性
	renameProps: {},
	showDefaultPlaceholder: true,
	showPlaceholderNode: ['el-input', 'el-autocomplete', 'el-select', 'el-cascader', 'el-time-select', 'el-time-picker', 'el-date-picker']
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
						// 集成表单验证
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
					{ node: 'el-radio-group', label: '是否已婚', name: 'isMarried',
						// 可通过form获取表单项的其他值，实现表单联动
					  show: ({ form }) => form.gender === 2,
					  validate: { trigger: 'change' },
					  children: () => {
					  	let list = [
					  		{ label: '是', value: 1 },
					  		{ label: '否', value: 0 }
					  	]

					  	// 支持jsx语法
					  	return list.map((i) => <el-radio label={ i.value }>{ i.label }</el-option>)
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