// 4

import { useEffect, useState } from "react";

// Что будет на экране через 1, 3, 5 секунд?
// Почему так происходит, как это исправить? 
export default function Task4() {
    const [count, setCount] = useState(3);

    useEffect(() => {
        setInterval(() => {
            console.log(count);
            
            setCount((prev) => prev - 1)
        }, 1000)
    }, []);

    return (
        <div> {count} </div>
    )
}