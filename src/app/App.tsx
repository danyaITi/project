import "app/styles/index.scss";
import { classNames } from "shared/lib";
import { useThemes } from "app/providers/themes_provider";
import { AppRouter } from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {Sidebar} from "widgets/sidebar";

export const App = () => {
  const { theme } = useThemes();
  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <div className='page-content'>
            <Sidebar/>
            <AppRouter/>
        </div>
    </div>
  );
};
