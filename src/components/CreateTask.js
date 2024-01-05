import React, { useState } from 'react';
import './Components.css';

export default function CreateTask(props) {
    const [task, setTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
            alert('Поле не повинно бути порожнім');
            return;
        }

        if (task.length > 1119999999) {
            alert('Поле занадто велике');
            return;
        }

        props.addTask(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={task}
                type='text'
                placeholder='Напишіть задачу'
                onChange={(event) => setTask(event.target.value)}
            />
            <button className='btn' type='submit'>
                Додати задачу
            </button>
        </form>
    );
}