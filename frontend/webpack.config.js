const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devtool: "eval-cheap-source-map",
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle-[fullhash].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin()
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 4200,
        historyApiFallback: true
    },    
}