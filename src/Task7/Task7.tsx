// 7

// найдите как можно больше ошибок
import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());


const Task7 = () => {
    const [number, setNumber] = useState<number>();
    const [scroll, setScroll] = useState<number>();

    useEffect(() => {
        fetchRandomNumber().then((data) => setNumber(data))

        console.log(window.scrollY);

        const handleScroll = throttle(() => setScroll(window.scrollY), 1000);

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='task7'>
            <div> Number: {number} </div>
            <div> Scroll: {scroll} </div>
        </div>
    )
}

export default Task7

// Решение разобрано тут, перед ознакомлением решите его 
// самостоятельно - https://habr.com/ru/articles/584924/