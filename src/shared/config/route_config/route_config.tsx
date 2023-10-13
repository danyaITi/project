import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/about';
import { HomePage } from 'pages/home';
import { AppRoutes } from './types';

export const routePath:Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.HOME]: '/',
};

export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.HOME]: {
        path: routePath.home,
        element: <HomePage />,
    },

};
