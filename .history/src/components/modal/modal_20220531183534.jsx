import React, { useRef } from 'react';
import styles from './modal.module.css';

const Modal = ({ displayModal, handleDisplayModal, handleAddItem }) => {
    const formRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const imageURLRef = useRef();

    const onAddItem = (event) => {
        event.preventDefault();
        const item = {
            id: Date.now(),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            imageURL: imageURLRef.current.value
        };
        formRef.current.reset();
        handleAddItem(item);
        handleDisplayModal(false);
    }
    return (
        <div 
            className={styles.modal}
            style={{
                display: displayModal ? 'block' : 'none',
            }}>
            <form 
                className={styles.modal_content}
                onSubmit={onAddItem}
                ref={formRef}>
                <span 
                    className={styles.close}
                    onClick={() => handleDisplayModal(false)} 
                >
                    X
                </span>
                <label htmlFor="name">이름</label>
                <input 
                    type="text" 
                    placeholder="꼬냑" 
                    maxLength="5" 
                    required
                    ref={titleRef} />
                <label htmlFor="image">이미지</label>
                <input 
                    type="text" 
                    placeholder="URL" 
                    required
                    ref={imageURLRef} />
                <label htmlFor="description">내용</label>
                <input 
                    type="text" 
                    placeholder="프랑스 꼬냑 지방에서 생산한대요" 
                    required
                    ref={descriptionRef} />
                <button type="submit" className={styles.btn}>저장</button>
            </form>
        </div>
    )
}

export default Modal;