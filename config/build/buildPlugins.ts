import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {THtmlPath} from "./types/config.types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export  const buildPlugins = ({html}:THtmlPath):webpack.WebpackPluginInstance[] => {
    return [new HtmlWebpackPlugin({
        template:html
    }), new webpack.ProgressPlugin(), new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
    })]
}