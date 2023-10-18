import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/sidebar/ui/sidebar';

describe('Sidebar component', () => {
    test('test render sidebar', () => {
        render(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar is collapsed', () => {
        render(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
