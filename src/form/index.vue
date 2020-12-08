<script>


	import is from '../utils/is'
	import renderForm from './form'
	import deepCopy from '../utils/copy'
	import recursive from '../utils/recursive'


	export default {

		name: 'FormCreate',

		version: process.env.VERSION,

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
			mode: {
				type: String,
				default: 'submit',
				validator: (type) => ['submit', 'search', 'preview'].indexOf(type) > -1
			},
			schema: {
				type: Array,
				default: () => []
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
			showIcon: {
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

			let form = {},
					schema = this.schema

			recursive(form, schema)

			this.form = deepCopy(Object.assign(form, this.value))

			this.$emit('input', this.form)
		},

		methods: {

			ref(str) {

				return this.$refs[ str ]
			},

			submit(cb) {

				let form = deepCopy(this.form),
						validate = this.$refs.form.validate

				// 如果有回调则执行回调函数
				if( is.function(cb) ) {

					return validate((valid) => valid ? cb(form) : false)
				}

				// 无回调执行Promise
				return new Promise((resolve, reject) => validate((valid, error) => valid ? resolve(form) : reject(error)))
			},

			reset() {

				this.$refs.form.resetFields()
			},

			get(key) {

				let form = this.form,
						data = {}

				if( is.string(key) ) {

					data[ key ] = form[ key ]
				}

				if( is.array(key) ) {

					key.forEach(i => data[i] = form[i])
				}

				return data
			},

			set(keys, value) {

				let form = deepCopy(this.form)

				if( is.string(keys) ) {

					form[ keys ] = value
				}


				if( is.array(keys) ) {

					keys.forEach(item => form[ item.key ] = item.value)
				}


				if( is.object(keys) ) {

					Object.keys(keys).forEach(item => form[ item ] = keys[ item ])
				}


				this.form = form
				this.$emit('input', form)
			},

			setSchema(schema) {

				let form = {}

				recursive(form, schema)

				this.form = deepCopy(Object.assign(form, this.value))

				this.$emit('input', this.form)
			}
		},

		render(h) {

			return renderForm(h, this)
		}
	}
</script>
<style>
	.form-create.form-full-width .el-select,
	.form-create.form-full-width .el-cascader,
	.form-create.form-full-width .el-date-editor {
		width: 100%;
	}
</style>