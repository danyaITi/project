import { Link } from "react-router-dom";
import "app/styles/index.scss";
import { classNames } from "shared/lib";
import { useThemes } from "app/providers/themes_provider";
import { AppRouter } from "app/providers/router";

export const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <section className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter/>
    </section>
  );
};
