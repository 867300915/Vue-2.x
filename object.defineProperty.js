/**
Object.defineProperty 需要三个参数（object , propName , descriptor）
1 object 对象 => 给谁加
2 propName 属性名 => 要加的属性的名字 【类型：String】
3 descriptor 属性描述 => 加的这个属性有什么样的特性【类型：Object】

Object.defineProperty方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象
value: 设置属性的值
writable: 值是否可以重写。true | false
enumerable: 目标属性是否可以被枚举。true | false
configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false
set: 目标属性设置值的方法
get：目标属性获取值的方法    　
 */
var obj = {}
Object.defineProperty(obj, "name", {
    value: "test"
})

/**
 * 
 * 变化检测
 function defineReactive(data,key,val){
     Object.defineProperty(data, key, {
         enumerable: true,
         configurabel:true,
         get:function(){
             return val
         },
         set: function(newVal){
             return
         }
         val = newVal
     })
 }
 */
