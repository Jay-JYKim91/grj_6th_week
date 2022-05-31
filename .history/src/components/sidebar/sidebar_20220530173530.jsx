import React from 'react'; 
import dummy from '../../db/data.json';
import styles from './sidebar.module.css';

const Sidebar = () => {
    const onBtnClick = (event) => {
        console.log('hi')
    }

    return (
        <aside>
            <button onClick={onBtnClick} className={styles.btn}>추가</button>
            {dummy.items.map(item => (
                <span>{item.title}</span>
            ))}
        </aside>
    )
}

export default Sidebar;