import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const LinkDecorator = (Story:StoryFn) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
