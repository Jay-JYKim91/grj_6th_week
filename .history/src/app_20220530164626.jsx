import styles from './app.module.css';
import Cards from './components/cards/cards';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Sidebar />
        <Cards />
      </main>
    </div>
  );
}

export default App;