<template>
	<div id="app">
		<div style="margin: 20px 50px;">
			{{ form }}
			<div>
				<el-button type="default" @click="schema.push({ node: 'el-input', label: '随机项', name: Math.random().toString(32).substr(2) })">增加</el-button>
			</div>
			
		</div>
		<form-create v-model="form" :schema="schema" @submit="handleSubmit">
			<el-form-item label="插槽">
				{{ form }}
			</el-form-item>
			<el-button type="success" slot="button">按钮插槽</el-button>
		</form-create>
	</div>
</template>
<script>


	export default {

		name: 'App',

		data() {

			return {

				form: {},

				schema: [
					
					{ node: 'el-input', label: '姓名', name: 'name', itemOptions: () => ({ class: 'form-item-name' }),
						props: { maxlength: 20, showWordLimit: true },
						validate: { required: true, min: 2, max: 20 },
						message: { range: '请输入长度为2-20字的姓名' },
						methods: {

							change: (e) => console.log('name is change', e)
						}
					},
					{ node: 'el-select', label: '性别', name: 'gender', validate: { trigger: 'change' }, children: [

						{ node: 'el-option', props: { label: '男', value: 1 } },
						{ node: 'el-option', props: { label: '女', value: 2 } },
					] },

					{ node: 'el-radio-group', label: '婚姻状况', name: 'married',
						validate: ({ form }) => ({ required: form.gender === 2, trigger: 'change' }),
						children: [
							{ node: 'el-radio', props: { label: 0 }, children: '未婚' },
							{ node: 'el-radio', props: { label: 1 }, children: '已婚' },
						]
					},

					{ node: 'el-input', label: '工作年限', name: 'experience', children: ({ h }) => <template slot="append">年</template> }, //

					{ itemMultiple: true, label: '公司经历', children: [

						{ multiple: true, label: '公司', children: [

							{ node: 'el-input', label: '部门', name: 'department' },
							{ node: 'el-input', label: '职位', name: 'job' },
							{ node: 'el-date-picker', label: '入职时间', name: 'join_time', validate: { trigger: 'change' } }
						] },

						{ multiple: true, label: '项目', children: [

							{ node: 'el-input', label: '名称', name: 'project_name' },
							{ node: 'el-input', label: '职能', name: 'work' },
							{ node: 'el-date-picker', label: '时间', name: 'start_time', validate: { trigger: 'change' } }
						] }
					] },
					{ label: '录入平台', children: 'OA管理系统' },
					<el-form-item label="录入日期">{ () => this.today }</el-form-item>, //
				]
			}
		},

		computed: {

			today() {

				let date = new Date()

				return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`
			}
		},

		methods: {

			handleSubmit(form) {

				console.log(form)

				alert(`已触发表单提交事件`)
			}
		}
	}
</script>