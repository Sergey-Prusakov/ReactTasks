// 3

// Есть сервак (https://jsonplaceholder.typicode.com/users)
// 1. Запросите с него данные и выведите список пользователей на экран
// 2. При клике на пользователя необходимо открывать модалку со всеми todos пользователя
// 2. Подключите TS и протипизируйте все файлы

import { useEffect, useState } from "react";
import Modal from 'react-modal';

interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string
}

export default function Task3() {
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const getUsers = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => data)

        setUsers(result)
        console.log(users);
        return result
    }

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const nameOnClick = (user: IUser) => {
        setModalIsOpen(true);
        setModalContent({
            name: user.name,
            email: user.email,
            phone: user.phone,
        });
    }

    const modalContentus = (
        <div>
            <h2>{modalContent.name}</h2>
            <p>{modalContent.email}</p>
            <p>{modalContent.phone}</p>
            <button onClick={closeModal}>Закрыть</button>
        </div>
    );


    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <ol>
                {users.map((elem: IUser) => (
                    <li onClick={() => { nameOnClick(elem) }} key={elem.id}>{elem.name}</li>
                ))}
            </ol>
            <div>
                <button onClick={openModal}>Открыть модальное окно</button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                    {modalContentus}
                </Modal>
            </div>
        </>
    )
}
