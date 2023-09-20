import {useState} from 'react';
import './counter.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const handleClickCounter = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button className='increment' onClick={handleClickCounter}>Добавить</button>
            {count}
        </div>
    );
};

