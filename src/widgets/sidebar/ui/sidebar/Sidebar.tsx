import {classNames} from "shared/lib";
import styles from './styles.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/theme_switcher";
import {Button} from "shared/ui";
import {Theme} from "shared/types";
import {LanguageSwitcher} from "widgets/language_switcher";

interface SidebarProps {
    className?:string
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed,setCollapsed] = useState<boolean>(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]:collapsed}, [className])}>
            <Button className={styles.toggleCollapsed} theme={Theme.PRIMARY} onClick={toggleCollapsed}>close/open</Button>
            <ThemeSwitcher/>
            <LanguageSwitcher/>
        </div>
    );
};

