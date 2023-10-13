import { classNames } from 'shared/lib';
import { LinkApp } from 'shared/ui';
import { Theme } from 'shared/types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface NavbarProps {
    className?:string
}
export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <LinkApp theme={Theme.PRIMARY} to="/">{t('home')}</LinkApp>
            <LinkApp theme={Theme.SECONDARY} to="/about">{t('about')}</LinkApp>
        </div>
    );
};
