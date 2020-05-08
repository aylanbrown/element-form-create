<script>

	import renderForm from './form'
	import { isObject, isString, isFunction, deepCopy } from './utils'


	function recursiveFunction(form, data, list) {

		let item = null

		for( let i = 0, len = list.length; i < len; i++ ) {

			item = list[i]

			if( isString(item.name) && item.name !== '' ) {

				form[ item.name ] = item.value || data[ item.name ] || null
			}

			if( Array.isArray(item.children) && item.children.length > 0 ) {

				recursiveFunction(form, data, item.children)
			}
		}
	}
	

	function renderSchema() {

		let form = {},
				list = this.schema,	
				data = deepCopy(this.value)

		recursiveFunction(form, data, list)

		form = { ...data, ...form }

		this.form = form
		this.$emit('input', form)
	}

	export default {

		name: 'FormCreate',
		data() {

			return {

				form: {}
			}
		},

		props: {

			value: {
				type: Object,
				default: () => ({})
			},
			schema: {
				type: Array,
				default: () => []
			},
			mode: {
				type: String,
				default: 'submit',
				validator: (mode) => ['submit', 'search', 'preview'].indexOf(mode) !== -1
			},
			options: {
				type: Object,
				default: () => ({})
			},
			loading: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			fullWidth: {
				type: Boolean,
				default: true
			},
			submitText: {
				type: String,
				default: '确定'
			},
			submitIcon: {
				type: String,
				default: 'el-icon-finished'
			},
			resetText: {
				type: String,
				default: '重置'
			},
			resetIcon: {
				type: String,
				default: 'el-icon-refresh-right'
			},
			showResetButton: {
				type: Boolean,
				default: true
			},
			searchText: {
				type: String,
				default: '搜索'
			},
			searchIcon: {
				type: String,
				default: 'el-icon-search'
			}
		},
		created() {

			renderSchema.call(this)
		},
		watch: {

			'schema': {

				handler: function() {

					renderSchema.call(this)
				},
				deep: true
			}
		},
		methods: {

			submit(cb) {

				let form     = deepCopy(this.form),
						validate = this.$refs.form.validate

				// 如果有回调则执行回调函数
				if( isFunction(cb) ) {

					return validate((valid) => valid ? cb(form) : false)
				}


				// 无回调执行Promise
				return new Promise((resolve, reject) => validate((valid, error) => valid ? resolve(form) : reject(error)))
			},

			reset() {

				this.$refs.form.resetFields()
			},

			get(key) {

				let form  = this.form,
						value = {}

				if( isString(key) ) {

					value[ key ] = form[ key ]
				}

				if( Array.isArray(key) ) {

					key.forEach(i => value[i] = form[i])
				}

				return value
			},

			set(keys, value) {

				let form = deepCopy(this.form)

				if( isString(keys) ) {

					form[ keys ] = value
				}


				if( Array.isArray(keys) ) {

					keys.forEach(item => form[ item.key ] = item.value)
				}


				if( isObject(keys) ) {

					Object.keys(keys).forEach(item => form[ item ] = keys[ item ])
				}


				this.form = form
				this.$emit('input', form)
			},

			ref(str) {

				return this.$refs[ str ]
			}
		},
		render(h) {

			return renderForm.call(this, h)
		}
	}
</script>
<style>
	.form-create-full .el-form-item .el-select,
	.form-create-full .el-form-item .el-cascader,
	.form-create-full .el-form-item .el-date-editor,
	.form-create-full .el-form-item .el-autocomplete {
		width: 100%;
	}
</style>