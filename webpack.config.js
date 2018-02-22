var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'wpoutput.js'
    },
    module: {
        rules: [
        	{
	            test: /\.css$/,
	            use: ExtractTextPlugin.extract({
	            	use: 'css-loader',
	            	fallback: 'style-loader'
	            })
        	},
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['less-loader'],
                    fallback: 'style-loader'
                })
            },
        	{
        		test:/\.vue$/,
        		loader: 'vue-loader',
        		options: {
        			loaders: {
        				css: ExtractTextPlugin.extract({
        					use: 'css-loader',
        					fallback: 'vue-style-loader'
        				})
        			}
        		}
        	},
        	{
        		test: /\.js$/,
        		loader: 'babel-loader',
        		exclude: /node_modules/
        	}, 
        	{
        		test: /\.(gif|jpg|png|woff|svg|eot|ttf|jpeg)\??.*$/,
        		loader: 'url-loader?limit=1024'
        	}
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};

module.exports = config;
