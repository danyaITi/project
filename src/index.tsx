import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemesProvider } from 'app/providers';
import 'app/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/error_boundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemesProvider>
                <App />
            </ThemesProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
