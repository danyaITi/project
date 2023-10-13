import { FC, useMemo, useState } from 'react';
import { ThemesContext, getThemeLocal } from '../lib';
import { Theme } from '../types';

export const ThemesProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getThemeLocal());

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemesContext.Provider value={defaultProps}>
            {children}
        </ThemesContext.Provider>
    );
};
