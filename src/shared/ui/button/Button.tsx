import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import { Theme } from 'shared/types';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string
    theme:Theme
}
export const Button: FC<ButtonProps> = ({
    children, className, theme, ...otherProps
}) => (
    <button type="button" {...otherProps} className={classNames(styles.button, {}, [className, styles[theme]])}>{children}</button>
);
