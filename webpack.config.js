'use strict'

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path:"./src/assets/js/"
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
  }

}
