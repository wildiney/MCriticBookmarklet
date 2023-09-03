/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [/node_modules/, path.resolve(__dirname, 'bookmarklet')],
        use: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts']
  }
}
