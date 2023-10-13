import { useThemes, Theme } from 'app/providers';
import { Button } from 'shared/ui';
import { Theme as ThemeButton } from 'shared/types';
import { classNames } from 'shared/lib';
import DarkThemeIcon from 'shared/assets/icons/dark-theme.svg';
import LightThemeIcon from 'shared/assets/icons/light-theme.svg';

interface ThemeSwitcherProps {
    className?:string
}
export const ThemeSwitcher = ({ className }:ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useThemes();

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.PRIMARY}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkThemeIcon height={50} width={50} /> : <LightThemeIcon height={50} width={50} />}
        </Button>
    );
};
