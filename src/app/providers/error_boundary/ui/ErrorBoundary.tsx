import {
    ReactNode, Component, ErrorInfo, Suspense
} from 'react';
import { PageError } from 'widgets/page_error';

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError:boolean
}
export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}
