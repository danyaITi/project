import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {IBuildPaths, TBuildEnv} from "./config/build/types/config";


export default (env:TBuildEnv) => {
  const paths:IBuildPaths = {
    build:path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html:path.resolve(__dirname, "public", "index.html")
  }

  const PORT = env.port || 3000
  const mode = env.mode || "development"
  const isDev = mode === 'development'

  return buildWebpackConfig({paths, mode,isDev, port: PORT})
}