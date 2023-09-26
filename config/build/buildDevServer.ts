import { TPort} from "./types/config.types";
import  type {Configuration as ConfigurationDevServer} from 'webpack-dev-server'

export const buildDevServer = (port:TPort):ConfigurationDevServer => {
    return  {
        port,
        open:true,
        historyApiFallback:true
    }
}