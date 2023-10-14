import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { Theme } from 'shared/types';
import styles from './styles.module.scss';

interface LinkAppProps extends LinkProps{
    className?:string
    theme?: Theme
}
export const LinkApp = ({
    children, to, className, theme = Theme.PRIMARY,
}:LinkAppProps) => (
    <Link
        to={to}
        className={classNames('', {}, [className, styles[theme]])}
    >
        {children}
    </Link>
);
