import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themes_provider/types';
import HomePage from './home';

const meta: Meta<typeof HomePage> = {
    title: 'pages/HomePage',
    component: HomePage,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];
Dark.decorators = [ThemeDecorator(Theme.DARK)];
