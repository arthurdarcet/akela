import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';


const production = process.env.NODE_ENV === 'production';

export default {
    entry: path.resolve(__dirname, 'client'),
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {stage: 0, optional: ['runtime'], plugins: ['./client/babelRelayPlugin']}
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
        })
    ],
    devtool: production ? 'source-map' : 'eval-source-map',
    devServer: {
        contentBase: './build'
    }
};
