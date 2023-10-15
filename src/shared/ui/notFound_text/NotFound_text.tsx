import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import styles from './styles.module.scss';

interface NotFoundTextProps {
    className?:string
}

export const NotFoundText = ({ className }:NotFoundTextProps) => {
    const { t } = useTranslation();
    return (
        <h1 className={classNames(
            styles.text,
            {},
            [className]
        )}
        >
            {t('not_found')}
        </h1>
    );
};
