const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    module: {
        rules: [
            { // CSS files/SASS files and style files
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                        sassOptions: {
                            fiber: false, // or "fiber: require("fibers")
                        }
                    }
                }]
            },
            { // Images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            { // Fonts -- should be "my-font-name.woff, my-font.woff2" and so on
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Template",
            inject: 'body',
            template: "./src/index.html"
        })
    ]
};