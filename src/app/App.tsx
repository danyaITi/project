import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "app/styles/index.scss";
import { classNames } from "shared/lib";
import { useThemes } from "app/providers/themes_provider";
import { HomePage } from "pages/main";
import { AboutPage } from "pages/about";

export const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <section className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </section>
  );
};
