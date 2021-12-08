const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

dotenv.config();

const getConfig = ({ isDev, isAnalyzeMode }) => ({
  mode: isDev ? 'development' : 'production',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[name].[chunkhash].js',
    chunkFilename: 'chunk.[name].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-react'],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(process.env.npm_package_version),
      'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './src/assets/images/favicon.png',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, './manifest.json'),
          to: path.join(__dirname, 'dist'),
          transform: (content) =>
            Buffer.from(
              JSON.stringify({
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString('utf-8')),
              })
            ),
        },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$/,
    }),
    isAnalyzeMode &&
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        statsFilename: 'bundle-stats.json',
      }),
  ].filter(Boolean),
  devServer: {
    port: 9000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](?!.core-js|babel-runtime).*[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
});

module.exports = (env, argv) => {
  const config = getConfig({
    isDev: argv.mode === 'development',
    isAnalyzeMode: env.bundleAnalyze,
  });

  return config;
};
