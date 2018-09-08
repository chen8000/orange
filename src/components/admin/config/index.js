
export const barTitle = [
    {
        key:'Small Orange',
        toPath:'/admin/welcome',
        icon:'icon-guanli'
    }
]

// left 列表
export const bar = [
    {
        key:'导航',
        toPath:'/admin/navbar',
        icon:'icon-daohang',
        slid:false
    },
    {
        key:'首页',
        icon:'icon-shouye1',
        slid:false,
        child:[
            {
                key:'头图1',
                toPath:'/admin/home/banner'
            }
        ]
    },
    {
        key:'最新动态',
        icon:'icon-info',
        slid:false,
        child:[
            {
                key:'头图1',
                toPath:'/admin/homeBanner1'
            },
            {
                key:'头图2',
                toPath:'/admin/homeBanner2'
            }
        ]
    },
    {
        key:'圈子',
        icon:'icon-quanzi',
        slid:false,
        child:[
            {
                key:'头图1',
                toPath:'/admin/homeBanner1'
            },
            {
                key:'头图2',
                toPath:'/admin/homeBanner2'
            }
        ]
    },
    {
        key:'关于我',
        icon:'icon-guanyuguwen',
        slid:false,
        child:[
            {
                key:'头图1',
                toPath:'/admin/homeBanner1'
            },
            {
                key:'头图2',
                toPath:'/admin/homeBanner2'
            }
        ]
    },
    {
        key:'聊天',
        icon:'icon-liaotianjilu',
        slid:false,
        child:[
            {
                key:'头图1',
                toPath:'/admin/homeBanner1'
            },
            {
                key:'头图2',
                toPath:'/admin/homeBanner2'
            }
        ]
    },
    {
        key:'管理',
        icon:'icon-shezhi1',
        slid:false,
        child:[
            {
                key:'头图1',
                toPath:'/admin/homeBanner1'
            }
        ]
    }
]

/*
    把复杂的数组元素的 key icon toPath  挑选出来放到一个新数组里

    1. 有topath 的元素 绝对没有 child  
    2. 有child 的元素绝对没有 toPath
*/ 
const newArr = bar => {
    let arr = []
    for(let i = 0; i<bar.length; i++){
        let { key, icon, toPath, child } = bar[i]

        if(toPath){
            arr.push({ toPath, icon, key })
        }else{
            for(let i = 0; i<child.length; i++){

                // 把 child 的toPath放到数组里
                let { toPath } = child[i]

                arr.push({ toPath, icon, key })
            }
        }
    }

    return arr
}

 // 返回 路由对应的标题和icon (导航list)
const pageInfo = (res, _this) => {

    let arr = newArr(res)

    let path = _this.location.pathname

    for(let i = 0;i<arr.length; i++){

        let { toPath, key, icon } = arr[i]

        // 把接收到的path跟数组的toPath互相includes如果包含那么就返回 挑选出来的icon
        if(toPath.includes(path) || path.includes(toPath)){
            return { key, icon }
        }
    }
}

// left 标题
export const leftTitleInfo = _this => {
    return pageInfo(barTitle, _this)
}

// left list
export const thisPageInfo = _this => {
    return pageInfo(bar, _this)

}




