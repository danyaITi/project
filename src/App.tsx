import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { MainPageLazy } from "./pages/main/main_lazy.page";
import { AboutPageLazy } from "./pages/about/about_lazy.page";
import { useThemes } from "./core/hooks";

export const App = () => {
  const { theme, toggleTheme } = useThemes();
  return (
    <section className={`app ${theme}`}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </section>
  );
};
