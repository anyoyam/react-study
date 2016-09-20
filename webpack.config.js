var webpack = require("webpack"),
  path = require('path'),
  ROOT = path.resolve(__dirname) + "/"
  // 提取WebPACK文本插件(如css,less,sass)
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  //代码压缩
  uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  context: ROOT,
  entry: {
    main: ROOT + 'source/main.js',
    item: ROOT + 'source/components/Item/index.js',
    vendors: ['react', 'react-dom']
  },
  output: {
    filename: "[name].build.js",
    path: ROOT + "build",
    sourceMapFilename: "[name].map"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-3', 'react']
      }
    },
    {
      test: '/\.css$/',
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
    }]
  },
  resolve: {
    alias: {
      'react': 'react/dist/react.min',
      'react-dom': 'react-dom/dist/react-dom.min',
    },
    extensions: ['', '.js', '.jsx'],
  },
  debug: true,
  devtool: "#source-map",
  plugin: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin("css/[name].css", {
      disable: false,
      allChunks: true,
    }),
  ],
};
