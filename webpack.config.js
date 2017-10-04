const path = require('path')

module.exports = {
  entry: {
    'defer-render-hoc.min': './src/index.js'
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel-loader'
    }]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    library: 'DeferRenderHoc',
    libraryTarget: 'umd'
  }
}
