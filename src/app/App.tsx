import { Link } from "react-router-dom";
import "app/styles/index.scss";
import { classNames } from "shared/lib";
import { useThemes } from "app/providers/themes_provider";
import { AppRouter } from "app/providers/router";
import {Navbar} from "widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <section className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
        <button onClick={toggleTheme}>Сменить тему</button>
    </section>
  );
};
