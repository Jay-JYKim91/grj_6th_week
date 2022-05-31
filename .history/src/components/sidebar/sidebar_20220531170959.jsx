import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = ({ items }) => {
    const onBtnClick = (event) => {
        console.log('hi')
    }

    return (
        <aside>
            <button onClick={onBtnClick} className={styles.btn}>추가</button>
            {items.map(item => (
                <span key={item.id}>{item.title}</span>
            ))}
        </aside>
    )
}

export default Sidebar;