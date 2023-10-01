import { useContext } from "react";
import { Theme } from "../types";
import { setThemeLocal } from "./themes_local";
import { ThemesContext } from "./themes_context";

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
