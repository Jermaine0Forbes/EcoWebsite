
var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css"
});

var baseConfig = {
    entry: {
      main: './public/scss/style.scss'
            },
    output: {
      filename: 'main.js',
      path: path.resolve('./public/build')
            },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
            })
        }]
    },
    plugins: [
        extractSass
    ]
};

// export configuration
module.exports = baseConfig;
