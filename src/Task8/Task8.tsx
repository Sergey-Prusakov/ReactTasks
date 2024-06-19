// 8

/**
1. Сделать поиск с подсказкой (suggest аля google)
   - API - https://rickandmortyapi.com/api/character
   - Фильтровать можно по query "name"
   - Smith - слово для поиска
   - полученные с сервера подсказки выводите ниже инпута,
     и при клике на подсказку значение должно записываться в инпут
     - Напишите дебаунс для запросов на сервер
 */

import { useState } from 'react';

interface IUser {
    name: string
}

export default function Task8() {
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);

    const fetchData = async (value: string) => {
        return await fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => {

                const results = data.results.filter((user: IUser) => {
                    return user.name.toLowerCase().includes(value)
                })
                console.log(results);
                return results;
            })
    }

    const handleChange = async (value: string) => {
        setSearchText(value)
        if (value) {
            const searchedUsers = await fetchData(value);
            setUsers(searchedUsers);
        } else {
            setUsers([]);
        }
    }

    return (
        <div className="suggest">
            <input
                className="search"
                type="search"
                value={searchText}
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
            />
            <div>
                {
                    users.map((elem: IUser) => (
                        <p>{elem.name}</p>
                    ))
                }
            </div>
        </div>
    )
}