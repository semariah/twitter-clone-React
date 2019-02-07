const webpack = require('webpack');
const resolve = require('path');

module.exports = {
  entry: [
    resolve(__direname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__direname, 'build')
  },

  resolve: {
    extentions: ['jsx', 'js']
  }
};
