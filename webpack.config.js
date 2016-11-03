'use strict'
var webpack = require('webpack');

module.exports = {
  entry: "./src-react/entry.js",
  output: {
    path:"./src/js/",
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exlude:["node_modules"],
        loader:"babel"
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin()
  ]
}
