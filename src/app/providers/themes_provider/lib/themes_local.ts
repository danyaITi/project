import { Theme } from "../types";

const key = "theme";

export const getThemeLocal = (): Theme => {
  return (localStorage.getItem(key) as Theme) || Theme.LIGHT;
};

export const setThemeLocal = (value: Theme) => {
  localStorage.setItem(key, value);
};
