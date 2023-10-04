import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib";
import styles from './styles.module.scss'
import {Theme} from "shared/types";

interface  LinkAppProps extends LinkProps{
    className?:string
    theme?: Theme
}
export const LinkApp = ({children, to, className, theme = Theme.PRIMARY}:LinkAppProps) => {
    return (
        <Link to={to} className={classNames(styles.linkApp, {}, [className, styles[theme]])}>{children}</Link>
    );
};

