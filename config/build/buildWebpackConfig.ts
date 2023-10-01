import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";
import {IBuildOptions} from "./types";

export const buildWebpackConfig = ({mode,paths, port, isDev}:IBuildOptions):webpack.Configuration => {
    const  {build, entry, html} = paths

    return {
        mode,
        entry: entry,
        output: {
            path: build,
            filename: "[name].[contenthash].js",
            clean: true,
        },

        plugins: buildPlugins({html}),

        devtool: isDev ? 'inline-source-map' : undefined,

        devServer: isDev ? buildDevServer(port) : undefined,

        module: {
            rules: buildLoaders(isDev),
        },

        resolve: buildResolve(paths),

    }
}