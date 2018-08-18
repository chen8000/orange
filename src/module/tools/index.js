

/*
------------------------------------------------------
|
|           增加 删除 检查 元素的class
|      elem 需要操作的元素  cls class
|
------------------------------------------------------
*/

// 检查
export const hasClass = (elem, cls) =>{
    cls = cls || ''
    if (cls.replace(/\s/g, '').length === 0) return false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

// 增加    
export const addClass = (elem, cls) => {
    if (!hasClass(elem, cls)) {
        elem.className = elem.className === '' ? cls : elem.className + ' ' + cls
    }
}

// 删除    
export const removeClass = (elem, cls) =>{
    if (hasClass(elem, cls)) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' '
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ')
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '')
    }
}



/*
------------------------------------------------------
|
|        注册事件
|   obj 事件元素  type 事件类型  fn触发函数
|
------------------------------------------------------
*/

export const addEvent = (obj,type,fn) =>{
    if(obj.attachEvent){ //ie
        obj.attachEvent('on'+type,() => {
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}

/*
------------------------------------------------------
|
|        删除事件
|   obj 事件元素  type 事件类型  fn触发函数
|
------------------------------------------------------
*/
export const removeEvent = (obj,type,fn) =>{
    if(obj.attachEvent){ //ie
        obj.detachEvent('on'+type,() => {
            fn.call(obj);
        })
    }else{
        obj.removeEventListener(type,fn,false);
    }
}


/*
-----------------------------------------------------
|
|       获取滚动条距离浏览器顶部的距离
|   
-----------------------------------------------------
*/
export const getScrollTop = () => {  
    let scrollPos;  
    if (window.pageYOffset) {  
        scrollPos = window.pageYOffset
    }else if (document.compatMode && document.compatMode !== 'BackCompat'){ 
        scrollPos = document.documentElement.scrollTop
    }else if (document.body) { 
        scrollPos = document.body.scrollTop
    }   
    return scrollPos 
} 


/*
-----------------------------------------------------
|
|       获取body的高度
| 
-----------------------------------------------------
*/

export const getBodyHeight = () => {
    return document.documentElement.clientHeight || document.body.clientHeight || window.clientHeight
}


/*
-----------------------------------------------------
|
|       判断是pc还是手机
| 
-----------------------------------------------------
*/

export const dev = () => {
    let u = navigator.userAgent;
    let t = {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/)||u.indexOf('iPad') > -1, //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部
    }

    
    if(t.android || t.iPhone ){
        // 手机
        return { type:'iphone' }
    }else if(t.iPad){ 
        // pad
        return { type:'pad' }
    }else{
        // pc
        return { type:'pc' }
    }
}

/*
-----------------------------------------------------
|
|       获取元素距离浏览器顶部的距离
| 
-----------------------------------------------------
*/
export const getElemTop = elem => {

    let elemTop = elem.offsetTop  //获得elem元素距相对定位的父元素的top
        elem = elem.offsetParent  //将elem换成起相对定位的父元素
    
    
    while(elem!=null){ //只要还有相对定位的父元素 
        /*获得父元素 距他父元素的top值,累加到结果中 */
        elemTop += elem.offsetTop
        //再次将elem换成他相对定位的父元素上;
        elem = elem.offsetParent
    }
    return elemTop
}
