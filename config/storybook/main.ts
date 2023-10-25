import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-css-modules'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },

    webpackFinal: async (config:webpack.Configuration) => {
        config.resolve.modules.push(path.resolve(__dirname, '../../src'));

        config.resolve.extensions.push('.ts', '.tsx');

        config.module.rules.push({
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../../src'),
        });

        const fileLoaderRule = config.module.rules.find(
            // @ts-ignore
            (rule) => rule.test && rule.test.test('.svg')
        );
        // @ts-ignore
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            loader: require.resolve('@svgr/webpack')
        });

        return config;
    },
};
export default config;
