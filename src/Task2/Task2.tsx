// 2

// 1. Что вывидется если нажать на кнопку 3 раза с промежутком в 3 секунды?
// 2. Почему так происходит, как это исправить?
// 3. Проведите код ревью и исправьте все ошибки допущенные тут
// 4. Протипизируйте компонент


import { useState } from 'react';

export default function Task2() {
    const [count, setCount] = useState(0);
    console.log(count);

    const action1 = function (event: React.MouseEvent<HTMLElement>) {
        console.log('log 1 - ', event);
        setCount(count + 1)
        alert(count);
    };

    return (
        <button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
                action1(event);
            }}>{' '}123</button>
    );
}
