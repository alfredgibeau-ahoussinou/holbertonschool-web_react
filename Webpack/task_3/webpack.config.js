const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: path.resolve(__dirname, 'modules', 'header', 'header.js'),
    body: path.resolve(__dirname, 'modules', 'body', 'body.js'),
    footer: path.resolve(__dirname, 'modules', 'footer', 'footer.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 8564,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name][contenthash].[ext]' } },
          { loader: 'image-webpack-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => `<!doctype html><html><head><meta charset=\"utf-8\"/><title>Task 3</title></head><body><script src=\"header.bundle.js\"></script><script src=\"body.bundle.js\"></script><script src=\"footer.bundle.js\"></script></body></html>`
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
