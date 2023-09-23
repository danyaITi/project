import {useState} from 'react';
import styles from './counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const handleClickCounter = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className={styles.increment} onClick={handleClickCounter}>Добавить</button>
            {count}
        </div>
    );
};

