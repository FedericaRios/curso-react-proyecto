const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Estrucura básica de un archivo de configuración de webpack
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
    },
    module: {
        rules: [
            {
                // Webpack se encargará de evaluar cada archivo para pasárselo a
                // su respectivo loader, es por eso que al argumento "test" le pasamos
                // como valor una expresión regular
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ],
    },
    // A diferencia de los loaders, los plugins no están dentro del atributo
    // "module" aunque en algunos casos los plugins pueden tener metodos que
    // funcionen como loaders. 
    // La mayoría de los plugins los instanciaras dentro de un array llamado
    // "Plugins" o dentro de "optimization" dependiendo el caso
    plugins: [
        new HtmlWebpackPlugin({
            // En ocasiones los plugins necesitaran un objeto de configuración
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
     devServer: {
         historyApiFallback: true,
     }
    
    // devServer: {
    //     static: {
    //       directory: path.join(__dirname, 'public'),
    //       },
    //     compress: true,
    //     port: 3005,
    //   },
};


// babel core ⇒ núcleo de babel
// babel/preset-env ⇒ para que javascript y las nuevas funcionalidades funcionen
// en cualquier navegador
// babel/preset-react ⇒ para que react funcione en cualquier navegador
// webpack y webpack-cli ⇒ bundler del proyecto
// webpack-dev-server ⇒ inicializar un servidor en local para mostrar en modo producción
// o desarrollo nuestra aplicación
// loaders y plugin ⇒ sirven para optimizar o extraer html de los archivos (i.e React)