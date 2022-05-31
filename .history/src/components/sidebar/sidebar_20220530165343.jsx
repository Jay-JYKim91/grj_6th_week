import React from 'react'; 
import dummy from '../../db/data.json';
import styles from './sidebar.module.css';

const Sidebar = () => {
    console.log(dummy);
    return (
        <aside>
            <span>맥주</span>
            <span>샴페인</span>
            <span>레드와인</span>
            <span>화이트와인</span>
            <span>데킬라</span>
            <span>위스키</span>
        </aside>
    )
}

export default Sidebar;