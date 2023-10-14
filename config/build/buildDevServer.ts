import type {
    Configuration as ConfigurationDevServer
} from 'webpack-dev-server';
import { TPort } from './types';

export const buildDevServer = (port:TPort):ConfigurationDevServer => ({
    port,
    open: true,
    historyApiFallback: true,
});
