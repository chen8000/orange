exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
{
            test:/\.scss$/,
            loaders:['style-loader', 'css-loader', 'sass-loader'],
          }
