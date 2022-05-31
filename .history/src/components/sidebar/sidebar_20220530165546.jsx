import React from 'react'; 
import dummy from '../../db/data.json';
import styles from './sidebar.module.css';

const Sidebar = () => {
    console.log(dummy);
    return (
        <aside>
            {dummy.items.map(item => (
                <span>{item.title}</span>
            ))}
        </aside>
    )
}

export default Sidebar;