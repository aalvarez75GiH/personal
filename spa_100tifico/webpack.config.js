const path = require('path')                                                //1
const HtmlWebpackPlugin = require('html-webpack-plugin')                    //2
const copyWebpackPlugin = require('copy-webpack-plugin')
              
module.exports = {                                                          //3
    entry: './src/index.js',                                                //4
    output: {                                                               //5
        path: path.resolve(__dirname, 'dist'),                              //6
        filename: 'main.js'                                                 //7
    },
    resolve: {
        extensions: ['.js'],                                                //8
    },
    module: {                                                               //9
        rules: [                                                            //10
            {                                                               //11
                test: /\.js?$/,                                             //12
                exclude: /node_modules/,                                    //13
                use: {
                    loader: 'babel-loader',                                 //14

                }
            }
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin(
          {
            inject: true,
            template: './public/index.html',
            filename: './index.html',
          }
        ),
        new copyWebpackPlugin({
          patterns: [
          { from: './src/styles/styles.css', to: ''},
        ]}),
      ],
    devtool: 'eval-cheap-source-map',
}

