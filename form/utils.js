

// 判断是否为字符串
export const isString = (opt) => Object.prototype.toString.call(opt) === '[object String]'

// 判断是否为数字
export const isNumber = (opt) => Object.prototype.toString.call(opt) === '[object Number]'

// 判断是否为布尔值
export const isBoolean = (opt) => Object.prototype.toString.call(opt) === '[object Boolean]'

// 判断是否为正则表达式
export const isRegexp = (opt) => Object.prototype.toString.call(opt) === '[object RegExp]'

// 判断是否为对象
export const isObject = (opt) => Object.prototype.toString.call(opt) === '[object Object]'

// 判断是否为函数
export const isFunction = (opt) => Object.prototype.toString.call(opt) === '[object Function]'

// 判断是否为基础数据类型
export const isOrigin = (opt) => isString(opt) || isNumber(opt) || isBoolean(opt) || opt === undefined || opt === null

// 判断是否为VNode
export const isVNode = (opt) => opt && opt.constructor !== undefined && opt.tag !== undefined



// 对象深拷贝
export const deepCopy = (obj, freeze = false) => {


	if(obj === null || obj === undefined || typeof obj !== 'object') {

    return obj
  }

  // 过滤非Object的构造函数，如File Date
  if(typeof obj === 'object' && obj.constructor.name !== 'Object') {

  	return obj
  }

  const copy = Array.isArray(obj) ? [] : {}

  // 递归
  Object.keys(obj).forEach(key => copy[key] = deepCopy(obj[key]))

  // 控制对象是否可以进行编辑
  return freeze ? Object.freeze(copy) : copy
}


// 默认值
export const defaultValue = (item, opts = {}, initialValue = '') => {

	return isFunction(item) ? item(opts) : ( item || initialValue )
}