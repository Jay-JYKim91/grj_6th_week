import React from 'react';
import styles from './modal.module.css';

const Modal = () => {
    return (
        <div className={styles.modal}>
            <form className="modal-content">
                <span className="close">X</span>
                <label htmlFor="name">이름</label>
                <input id="name" type="text" placeholder="꼬냑" maxLength="5" required/>
                <label htmlFor="image">이미지</label>
                <input id="imageURL" type="text" placeholder="URL" required />
                <label htmlFor="description">내용</label>
                <input id="description" type="text" placeholder="프랑스 꼬냑 지방에서 생산한대요" required />
                <button type="submit" className="btn">저장</button>
            </form>
        </div>
    )
}

export default Modal;