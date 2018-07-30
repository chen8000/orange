# 配置sass
* exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
* {
            test:/\.scss$/,
            loaders:['style-loader', 'css-loader', 'sass-loader'],
          }
# 配置css  module          
* css-loader?modules  开启css modules模式
 --- 
* &localIdentName=[name]_[local]_[hash:base64:5] 自定义css名，
* name为css文件的名字，
* local为class名，
* [hash:base64:5] 5位hash值
 ---
* 'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]'
