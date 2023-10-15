import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/about';
import { HomePage } from 'pages/home';
import { NotFound } from 'pages/not_found';
import { AppRoutes } from './types';

export const routePath:Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.HOME]: '/',
    [AppRoutes.NOT_FOUND]: '*'
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

    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFound />
    }

};
