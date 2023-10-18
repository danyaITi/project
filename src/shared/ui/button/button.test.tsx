import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { Theme } from 'shared/types';

describe('Button component', () => {
    test('test render', () => {
        render(<Button>test</Button>);

        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('test theme primary', () => {
        render(<Button theme={Theme.PRIMARY}>Test</Button>);

        expect(screen.getByText(/test/i)).toHaveClass('primary');
    });
});
