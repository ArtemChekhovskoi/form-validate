const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = ({ development }) => ({
    entry: './src/validate.ts',
    devtool: development ? 'inline-source-map' : false,
    mode: development ? 'development' : 'production',
    output: {
        filename: 'validate.ts',
        path: path.resolve(__dirname, 'dist'),
        library: 'form-validate',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self === \'undefined\' ? this : self',
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    plugins: [new ESLintPlugin({ extensions: ['ts'] })]
})