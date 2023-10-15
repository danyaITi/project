import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { Theme } from 'shared/types';
import styles from './styles.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const handleReload = () => {
        document.location.reload();
    };

    return (
        <div className={styles.pageError}>
            <h1 className={styles.errorText}>
                {t('page_error')}
            </h1>
            <Button
                onClick={handleReload}
                theme={Theme.PRIMARY}
            >
                {t('reload')}
            </Button>
        </div>
    );
};
