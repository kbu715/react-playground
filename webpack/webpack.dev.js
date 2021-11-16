const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map', // which create-react-app recommends for dev env
  devServer: {
    hot: true,
    open: true,
    compress: true,
    port: 3000,
    historyApiFallback: true, // React Router에서 특정 URL 접속 시(url 입력) 페이지를 찾을 수 없는 문제 원인 및 해결 방법
    // https://velog.io/@yhe228/%EC%A3%BC%EC%86%8C%EC%B0%BD%EC%97%90-url-%EC%A7%81%EC%A0%91-%EC%9E%85%EB%A0%A5%EC%8B%9C-%EB%9D%BC%EC%9A%B0%ED%8C%85-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%8A%88
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Todo-App-dev'),
    }),
  ],
};
