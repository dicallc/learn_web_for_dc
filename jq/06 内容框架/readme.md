
#### 设置和获取innerHTML

innerHTML:

属性设置或返回表格行的开始和结束标签之间的 HTML
```
        function html(context, value){
            var doms = $$.$all(context);
            //设置
            if(value){
                for(var i= 0,len= doms.length; i<len; i++){
                    doms[i].innerHTML = value;
                }
            }else{
                return doms[0].innerHTML
            }
    
        }

```