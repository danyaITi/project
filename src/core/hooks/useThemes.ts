import { useContext } from "react";
import { ThemesContext } from "../../context/themes/themes.context";
import { Theme } from "../../data/enums";
import { setThemeLocal } from "../../data/local/themes";

interface State {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemes = (): State => {
  const { setTheme, theme } = useContext(ThemesContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    setThemeLocal(newTheme);
  };

  return { theme, toggleTheme };
};
