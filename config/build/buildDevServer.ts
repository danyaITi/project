import { TPort} from "./types/config";
import  type {Configuration as ConfigurationDevServer} from 'webpack-dev-server'

export const buildDevServer = (port:TPort):ConfigurationDevServer => {
    return  {
        port,
        open:true
    }
}