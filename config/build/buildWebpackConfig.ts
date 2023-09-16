import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolve} from "./buildResolve";
import {IBuildOptions} from "./types/config";

export const buildWebpackConfig = ({mode,paths}:IBuildOptions):webpack.Configuration => {
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

        module: {
            rules: buildLoaders(),
        },

        resolve: buildResolve(),

    }
}