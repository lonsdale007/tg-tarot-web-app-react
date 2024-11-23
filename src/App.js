import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      Таро
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
