import "app/styles/index.scss";
import { classNames } from "shared/lib";
import { useThemes } from "app/providers/themes_provider";
import { AppRouter } from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {ThemeSwitcher} from "widgets/theme_switcher";

export const App = () => {
  const { theme } = useThemes();
  return (
    <section className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
        <ThemeSwitcher/>
    </section>
  );
};
