import type { Meta, StoryObj } from '@storybook/react';

import { Theme as LinkTheme } from 'shared/types';
import { Theme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { LinkApp } from './Link_app';

const meta: Meta<typeof LinkApp> = {
    title: 'shared/LinkApp',
    component: LinkApp,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
};

export default meta;
type Story = StoryObj<typeof LinkApp>;

export const PrimaryLight: Story = {
    args: {
        children: 'Text',
        theme: LinkTheme.PRIMARY
    },
};

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: LinkTheme.PRIMARY
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryLight: Story = {
    args: {
        children: 'Text',
        theme: LinkTheme.SECONDARY
    },
};

SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: LinkTheme.SECONDARY
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
