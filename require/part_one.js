
//1.对象写法 参考：http://www.ruanyifeng.com/blog/2012/10/javascript_module.html
var module1 = new Object({
    _count : 0,
    m1 : function (){
        console.log('m1')
    },
    m2 : function (){
        console.log('m2')
    }
});

// module1.m1();

//2.立即执行函数写法
var module2=(function () {
   var _count = 0;
    m1 = function (){
        console.log('m1')
    }
    m2 = function (){
        console.log('m2')
    }
    return {
        m1 : m1,
        m2 : m2
    };

})();

// console.info(module2._count);

//3.放大模式

var module3=(function (mod) {
    mod.m3=function () {
        console.log('m3')
    };
    return mod;
})(module2);

// console.info(module2.m3);

//宽放大模式（Loose augmentation）

var module4 = ( function (mod){
    return mod;
})(window.module4 || {});

