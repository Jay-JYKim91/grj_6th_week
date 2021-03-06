import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Card from './components/card/card';
import Modal from './components/modal/modal';

function App() {
  const initialData = [
    {
        id: 1,
        title: "맥주",
        description: "여름에 시원한 맥주 최고",
        imageURL: "https://www.collinsdictionary.com/images/thumb/beer_123784216_250.jpg?version=4.0.257"
    },
    {
        id: 2,
        title: "샴페인",
        description: "사실 제일 좋아하는 샴페인",
        imageURL: "https://st.depositphotos.com/1518767/1397/i/600/depositphotos_13974062-stock-photo-glass-of-champaigne-being-filled.jpg"
    },
    {
        id: 3,
        title: "레드와인",
        description: "스테이크엔 역시 레드와인",
        imageURL: "https://www.thespruceeats.com/thmb/Z6Q_Dfy2jlBi4_K0saTn3z3Hgko=/3840x3840/smart/filters:no_upscale()/red-wine-is-poured-into-a-glass-from-a-bottle--light-background--1153158143-98320451802c485cb6d7b5437c7fd60a.jpg"
    },
    {
        id: 4,
        title: "화이트와인",
        description: "홍합찜에 화이트와인 최고",
        imageURL: "https://imageio.forbes.com/specials-images/imageserve/5f2582fd92a7ff710fcf29d5/White-wine-glass-and-bottle-on-a-white-background-/960x0.jpg?format=jpg&width=960"
    },
    {
        id: 5,
        title: "데킬라",
        description: "미드에서만 봤던 데킬라",
        imageURL: "https://hoh.com.ng/wp-content/uploads/2021/08/SIERRA-TEQUILA-SILVER.jpg"
    },
    {
        id: 6,
        title: "위스키",
        description: "익숙하지만 안 마셔본 위스키",
        imageURL: "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product_detail/855f55e6-0d74-408a-ac4c-f276e7317671.jpeg"
    }
]

  const [items, setItems] = useState(initialData);
  const [displayModal, setDisplayModal] = useState(false);
  
  const handleDisplayModal = (value) => {
    setDisplayModal(value);
  }

  const addItem = (item) => {
    setItems([...items, item]);
  }

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
        handleDisplayModal={handleDisplayModal}
        handleAddItem={addItem}
      />
    </div>
  );
}

export default App;