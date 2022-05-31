import styles from './app.module.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Sidebar />
      </main>

      
    </div>
  );
}

export default App;