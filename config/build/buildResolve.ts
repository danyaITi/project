import webpack from "webpack";
import { IBuildOptions, TSrcPath } from "./types";

export const buildResolve = ({src}:TSrcPath):webpack.ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules:[src, 'node_modules'],
        mainFiles: ['index'],
        alias:{}
    }
}