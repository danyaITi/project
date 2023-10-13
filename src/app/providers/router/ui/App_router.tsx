import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route_config';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={t('loading')}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div
                                className="page-wrapper"
                            >
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
