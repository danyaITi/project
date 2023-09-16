import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {THtmlPath} from "./types/config";

export  const buildPlugins = ({html}:THtmlPath):webpack.WebpackPluginInstance[] => {
    return [new HtmlWebpackPlugin({
        template:html
    }), new webpack.ProgressPlugin()]
}