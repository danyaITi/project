import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";
import {IBuildOptions} from "./types";

export const buildWebpackConfig = (options:IBuildOptions):webpack.Configuration => {
    const  {paths,isDev,port,mode} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true,
        },

        plugins: buildPlugins(options),

        devtool: isDev ? 'inline-source-map' : undefined,

        devServer: isDev ? buildDevServer(port) : undefined,

        module: {
            rules: buildLoaders(isDev),
        },

        resolve: buildResolve(paths),

    }
}