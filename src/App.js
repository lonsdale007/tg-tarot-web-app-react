import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      Таро
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
