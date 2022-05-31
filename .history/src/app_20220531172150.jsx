import { useState } from 'react';
import styles from './app.module.css';
import dummy from './db/data.json';
import Cards from './components/cards/cards';
import Modal from './components/modal/modal';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [items, setItems] = useState(dummy.items);
  const [displayModal, setDisplayModal] = useState(false);

  const onBtnClick = (event) => {
    console.log('hi')
}


  return (
    <div className={styles.app}>
      <header>
            <span>고량주</span>
      </header>
      <main>
        <aside>
            <button onClick={onBtnClick} className={styles.btn}>추가</button>
            {items.map(item => (
                <span key={item.id}>{item.title}</span>
            ))}
        </aside>

        {/* <Sidebar items={items} /> */}
        <Cards items={items} />
      </main>
      <Modal />
    </div>
  );
}

export default App;