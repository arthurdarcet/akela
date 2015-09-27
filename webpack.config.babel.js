import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';


const production = process.env.NODE_ENV === 'production';

export default {
    entry: [
        path.resolve(__dirname, 'client', 'index.js'),
        'webpack/hot/dev-server',
        'webpack-dev-server/client'
    ],
    output: {
        path: './build',
        filename: '/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ['babel-loader'],
            query: {
                stage: 0,
                optional: ['runtime'],
                plugins: ['./tools/babel-relay-plugin']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}
        }),
        new HtmlWebpackPlugin({
            title: 'Compta • Scouts de Neuilly'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: production ? 'source-map' : 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 4000,
        hot: true,
        contentBase: './build',
        proxy: {
            '/graphql': 'http://127.0.0.1:3000',
        }
    }
};
