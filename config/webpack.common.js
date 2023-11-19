const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    module: {
        rules: [
            { // CSS files/SASS files and style files
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
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
            template: "./src/html/index.html",
            inject: false,
            // This option allows you to specifically control where to place the css and js tags in your code.
            // To place css use: <%= css %> and to place js use: <%= js %> where you want the tags to be placed.
            // Likewise, you can remove templateParameters, set inject:body, and
            templateParameters: (compilation, assets) => {
                const js = assets.js.map((filePath) => `<script src="${filePath}"></script>`).join("\n");
                const css = assets.css.map((filePath) => `<link rel="stylesheet" href="${filePath}" />`).join("\n");
                return { css, js };
            },
            // fileName: "[name].html" -- don't need this when using template
        }),
        new MiniCssExtractPlugin({
            filename: "style.css", // can also do [name].css if serving up multiple files to generate the appropriate name
            chunkFilename: "[id].css"
        })
    ],

};