
### 缓存框架的介绍

一般无非也就是增删改查，其数据结构可成为下面这样：

```
        var cache = {
            get:function(){},
            add:function(){},
            delete:function(){},
            update:function(){}
        }

```

其具体实现，载体就是一个json变量:

```
 var cache = {
        data:[],
        get:function(key){
            console.log('111')
            var value = null;
            console.log(this.data)
            for(var i= 0,len=this.data.length;i<len; i++){
                var item = this.data[i]
                if (key == item.key) {
                    value = item.value;
                }
            }
            console.log('get'+value)
            return value;
        },
        add:function(key,value){
            var json= { key: key, value: value};
            this.data.push(json);
        },
        delete:function(key){
            var status = false;
            for(var i= 0,len=this.data.length;i<len; i++){
                var item = this.data[i]
                // 循环数组元素
                if (item.key.trim() == key) {
                    this.data.splice(i, 1);//开始位置,删除个数
                    status = true;
                    break;
                }
            }
            return status;
        },
        update:function(key,value){
            var status = false;
            // 循环数组元素
            for(var i= 0,len=this.data.length;i<len; i++){
                var item = this.data[i]
                if (item.key.trim() === key.trim()) {
                    item.value = value.trim();
                    status = true;
                    break;
                }
            }
            return status;
        },
        isExist:function(key){
            for(var i= 0,len=this.data.length;i<len; i++){
                var item = this.data[i]
                if (key === item.key) {
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
```

如果换成cookie做为存储载体呢？

实现：

```
    function setCookie(name,value,days,path){
                    var name = escape(name);
                    var value = escape(value);
                    var expires = new Date();
                    expires.setTime(expires.getTime() + days*24*60*60*1000);
                    path = path == "" ? "" : ";path=" + path;
                    _expires = (typeof hours) == "string" ? "" : ";expires=" + expires.toUTCString();
                    document.cookie = name + "=" + value + _expires + path;
                }
    
        //获取cookie值
        function getCookie(name){
            var name = escape(name);
            //读cookie属性，这将返回文档的所有cookie
            var allcookies = document.cookie;
    
            //查找名为name的cookie的开始位置
            name += "=";
            var pos = allcookies.indexOf(name);
            //如果找到了具有该名字的cookie，那么提取并使用它的值
            if (pos != -1){                                             //如果pos值为-1则说明搜索"version="失败
                var start = pos + name.length;                  //cookie值开始的位置
                var end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
                if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie
                var value = allcookies.substring(start,end);  //提取cookie的值
                return unescape(value);                           //对它解码
            }
            else return "";                                             //搜索失败，返回空字符串
        }
    
        //删除cookie
        function deleteCookie(name,path){
            var name = escape(name);
            var expires = new Date(0);
            path = path == "" ? "" : ";path=" + path;
            document.cookie = name + "="+ ";expires=" + expires.toUTCString() + path;
        }


```