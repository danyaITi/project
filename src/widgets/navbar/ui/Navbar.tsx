import {classNames} from "shared/lib";
import styles from './styles.module.scss'
import {LinkApp} from "shared/ui";
import {Theme} from "shared/types";

interface  NavbarProps {
    className?:string
}
export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <LinkApp theme={Theme.PRIMARY} to="/">Главная</LinkApp>
            <LinkApp theme={Theme.SECONDARY} to="/about">О сайте</LinkApp>
        </div>
    );
};

