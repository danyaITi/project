import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themes_provider/types';
import { ThemeSwitcher } from './Theme_switcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    args: {
        testTheme: Theme.LIGHT
    },
};

export const Dark: Story = {
    args: {
        testTheme: Theme.DARK
    },
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];
Dark.decorators = [ThemeDecorator(Theme.DARK)];
