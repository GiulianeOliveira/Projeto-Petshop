// webpack é processado por node.js
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/main.js", // Onde vai começar o grafo de dependências
    output: {
        filename: "main.js", // Onde vai salvar o arquivo unificado
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/clientes.html", // entry
            filename: "index.html"  // output
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // identifica os arquivos .css
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/, // identifica os arquivos .html
                use: ["html-loader"]
            },
            {
                test: /\.png$/, // identifica os arquivos .png
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]" // nome da figura 
                    }
                }
            }
        ]

    }
}