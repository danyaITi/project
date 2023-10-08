import {Button} from "shared/ui";
import {Theme} from "shared/types";
import styles from './styles.module.scss'
import {classNames} from "shared/lib";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
    className?:string
}
export const LanguageSwitcher = ({className}:LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={toggleLanguage} theme={Theme.PRIMARY} className={classNames(styles.languageSwitcher, {}, [className])}>
            {t('toggleLanguage')}
        </Button>
    );
};

