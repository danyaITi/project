import { classNames } from 'shared/lib';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme_switcher';
import { Button } from 'shared/ui';
import { Theme } from 'shared/types';
import { LanguageSwitcher } from 'widgets/language_switcher';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface SidebarProps {
    className?:string
}

export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button className={styles.toggleCollapsed} theme={Theme.PRIMARY} onClick={toggleCollapsed}>{t('sidebar')}</Button>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    );
};
