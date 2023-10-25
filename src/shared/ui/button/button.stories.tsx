import type { Meta, StoryObj } from '@storybook/react';

import { Theme as ThemeButton } from 'shared/types';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themes_provider/types';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.SECONDARY
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINED
    },
};

Outlined.decorators = [ThemeDecorator(Theme.DARK)];
