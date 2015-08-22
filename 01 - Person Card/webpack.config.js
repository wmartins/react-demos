module.exports = {
    context: __dirname + '/src/scripts',
    entry: './app.jsx.js',
    module: {
        loaders: [
            {test: /\.jsx.js$/, loader: 'jsx-loader'}
        ]
    },
    output: {
        path: __dirname + '/dist/scripts',
        filename: 'app.js'
    }
};
