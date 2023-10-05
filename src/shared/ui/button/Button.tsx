import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib";
import  styles from './styles.module.scss'
import {Theme} from "shared/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string
    theme:Theme
}
export const Button: FC<ButtonProps> = ({children,className,theme,...otherProps}) => {
    return (
        <button {...otherProps} className={classNames(styles.button, {}, [className, styles[theme]])}>{children}</button>
    );
};

