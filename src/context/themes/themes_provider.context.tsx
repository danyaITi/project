import { FC, useMemo, useState } from "react";
import { ThemesContext } from "./themes.context";
import { Theme } from "../../data/enums";
import { getThemeLocal } from "../../data/local/themes";

export const ThemesProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getThemeLocal());

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemesContext.Provider value={defaultProps}>
      {children}
    </ThemesContext.Provider>
  );
};
