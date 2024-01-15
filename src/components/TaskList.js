import React from 'react';
import './Components.css';

export default function TaskList({ tasks, deleteTask, completeTask }) {
    return (
        <ul className='list'>
            {tasks.map((task) => (
                <li className='task' key={task.id}>
                    <p onClick={() => completeTask(task.id)}  className={task.isComplete ? "complete" : "notcomplete"}>{task.text}</p>
                    <button
                        type="button"
                        className='btn buton'
                        onClick={() => deleteTask(task.id)}
                    >
                        Видалити
                    </button>
                </li>
            ))}
        </ul>
    );
}