import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {IBuildPaths} from "./config/build/types/config";

const paths:IBuildPaths = {
  build:path.resolve(__dirname, "dist"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html:path.resolve(__dirname, "public", "index.html")
}

const config: webpack.Configuration = buildWebpackConfig({paths, mode:'development'});

export default config