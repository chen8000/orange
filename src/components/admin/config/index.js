
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

 // 返回 路由对应的标题和icon (导航list)
const pageInfo = (res, _this) => {
    let path = _this.location.pathname
    
    for(let i = 0; i< res.length; i++){
        let { key, toPath, icon } = res[i]

        if(!toPath){
            let { key, icon, child } = res[i]

            for(let i = 0; i<child.length;i++){
                let { toPath } = child[i]

                if(path === toPath){
                    return {key, icon}
                }
            }
        }

        if(path === toPath){
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




