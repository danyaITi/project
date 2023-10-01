import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {TIsDev} from "./types";

export  const buildLoaders = (isDev:TIsDev):webpack.RuleSetRule[] => {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader:"css-loader",
                options: {
                    modules: {
                        auto: /\.module\.\w+$/i,
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                    },
                },
            },
            "sass-loader",
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoader
    ]
}