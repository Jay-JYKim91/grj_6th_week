import React from 'react'; 
import dummy from '../../db/data.json';
import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <aside>
            <button id="openModalBtn" className="btn">추가</button>
            {dummy.items.map(item => (
                <span>{item.title}</span>
            ))}
        </aside>
    )
}

export default Sidebar;