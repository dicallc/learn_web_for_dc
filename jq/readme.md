### jq中对于属性操作：

#### 属性操作 新增

```
        var element =  $("p").eq(1)
        element.attr("name",'神仙');
```
#### 属性操作 删除
```
    element =  $("p").eq(1)
    element.removeAttr("name");
```
#### 属性操作 - addClass

```
     element =  $("p").eq(1)
     element.addClass("add hide");

```

#### 属性操作 - removeClass

```
     element =  $("p").eq(1)
     element.removeClass("hide");
```

[具体例子可看代码](https://github.com/dicallc/learn_web_for_dc/blob/master/jq/05%20%E5%B1%9E%E6%80%A7%E6%A1%86%E6%9E%B6/02%20jquery%20zepto%E4%B8%AD.html)

### dom原生属性操作：

#### attr 单元素

属性操作，获取属性的值，设置属性的值 attr（'test','target','_blank'）

```
    function attr(id, key, value){
        var dom =  $$.$id(id);
        if(value){
            dom.setAttribute(key, value);
        }else{
            return dom.getAttribute(key);
        }
    }
    //使用
     $$.$id('mybtn').onclick = function(){
            attr('container','name','hello');
            attr('container','class','div');
        }
```
[具体例子可看代码](https://github.com/dicallc/learn_web_for_dc/blob/master/jq/05%20%E5%B1%9E%E6%80%A7%E6%A1%86%E6%9E%B6/03%20attr%20%E5%8D%95%E5%85%83%E7%B4%A0.html)

#### attr 多元素 get/set

```
        function attr(content, key, value){
            var dom =  $$.$all(content);
    //        如果是数组  比如tag
            if(dom.length){
                if(value){
                    for(var i= 0, len=dom.length; i <len; i++){
                        dom[i].setAttribute(key, value);
                    }
                }else{
                    return dom[0].getAttribute(key);
                }
    //            如果是单个元素  比如id
            }else{
                if(value){
                    dom.setAttribute(key, value);
                }else{
                    return dom.getAttribute(key);
                }
            }
        }
```

[具体例子可看代码](https://github.com/dicallc/learn_web_for_dc/blob/master/jq/05%20%E5%B1%9E%E6%80%A7%E6%A1%86%E6%9E%B6/04%20attr%20%E5%A4%9A%E5%85%83%E7%B4%A0.html)


### 添加和删除class
#### 动态添加和移除class

```
    function addClass(context, name){
            //获取dom元素
            var doms = $$.$all(context);
            //如果获取的是集合
            if(doms.length){
                for(var i= 0,len=doms.length;i<len;i++){
                    addName(doms[i]);
                }
            //如果获取的不是集合
            }else{
                addName(doms);
            }
            function addName(dom){
                dom.className = dom.className + ' ' + name;
            }
        }
        
         function removeClass(context, name){
             var doms = $$.$all(context);
             if(doms.length){
                 for(var i= 0,len=doms.length;i<len;i++){
                     removeName(doms[i]);
                 }
             }else{
                 removeName(doms);
             }
             function removeName(dom){
                 dom.className = dom.className.replace(name, '');
             }
         }
```
[具体例子可看代码](https://github.com/dicallc/learn_web_for_dc/blob/master/jq/05%20%E5%B1%9E%E6%80%A7%E6%A1%86%E6%9E%B6/06%20class%E5%B1%9E%E6%80%A7.html)

#### 判断是否有

```
 function hasClass(context,name){
        var doms = $$.$all(context)
        var flag = true;
        for(var i= 0,len=doms.length;i<len;i++){
            flag = flag && check(doms[i],name)
        }

        return flag;
        //判定单个元素
        function check(element,name){
            return -1<(" "+element.className+" ").indexOf(" "+name+" ")
        }
    }
```

