1.new Object(); 参考：总结js创建object的方式（对象）

2.require.js的诞生

（1）实现js文件的异步加载，避免网页失去响应；
（2）管理模块之间的依赖性，便于代码的编写和维护。


defer 属性规定是否对脚本执行进行延迟，直到页面加载为止
data-main:网页程序的主模块,第一个加载

<pre>
<script src="js/require.js" defer async="true" ></script>
<script src="js/require.js" data-main="js/main"></script>

//main.js

　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
　　　　// some code here
　　});
</pre>


实战参考：http://www.ruanyifeng.com/blog/2012/11/require_js.html