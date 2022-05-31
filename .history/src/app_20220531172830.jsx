import { useState } from 'react';
import styles from './app.module.css';
import dummy from './db/data.json';
import Card from './components/card/card';
import Modal from './components/modal/modal';

function App() {
  const [items, setItems] = useState(dummy.items);
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className={styles.app}>
      <header>
            <span>고량주</span>
      </header>
      <main>
        <aside>
            <button 
              onClick={() => setDisplayModal(true)} 
              className={styles.btn}>
              추가
            </button>
            {items.map(item => (
                <span key={item.id}>{item.title}</span>
            ))}
        </aside>
        <section className={styles.cards}>
            {items.map(item => (
                <Card 
                  key={item.id} 
                  title={item.title} 
                  imageURL={item.imageURL} 
                  description={item.description} />
            ))}
        </section>
      </main>
      <Modal 
        displayModal={displayModal}
        />
    </div>
  );
}

export default App;