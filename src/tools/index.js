

//------------------------------------------------------
//  |
//  |           增加 删除 检查 元素的class
//  |      elem 需要操作的元素  cls class
//  |
//------------------------------------------------------

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



//------------------------------------------------------
//  |
//  |        注册事件
//  |   obj 事件元素  type 事件类型  fn触发函数
//  |
//------------------------------------------------------

export const addEvent = (obj,type,fn) =>{
    if(obj.attachEvent){ //ie
        obj.attachEvent('on'+type,() => {
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}

