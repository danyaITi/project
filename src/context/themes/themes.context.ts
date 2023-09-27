import { createContext } from "react";
import { Theme } from "../../data/enums";

interface IThemesContext {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemesContext = createContext<IThemesContext>({});
