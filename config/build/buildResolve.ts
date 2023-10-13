import webpack from 'webpack';
import { TSrcPath } from './types';

export const buildResolve = ({ src }:TSrcPath):webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
});
