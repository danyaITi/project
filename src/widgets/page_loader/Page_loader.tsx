import { Loader } from 'shared/ui';
import styles from './styles.module.scss';

export const PageLoader = () => (
    <div className={styles.pageLoader}><Loader /></div>
);
