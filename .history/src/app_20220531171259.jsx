import { useState } from 'react';
import styles from './app.module.css';
import dummy from './db/data.json';
import Cards from './components/cards/cards';
import Header from './components/header/header';
import Modal from './components/modal/modal';
import Sidebar from './components/sidebar/sidebar';

function App() {
  const [items, setItems] = useState(dummy.items);
  const [displayModal, setDisplayModal] = useState(false);



  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Sidebar items={items} />
        <Cards items={items} />
      </main>
      {/* <div id="addItemModal" className={styles.modal}> */}
      <Modal />
      {/* </div> */}
    </div>
  );
}

export default App;