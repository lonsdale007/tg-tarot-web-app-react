import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Navigator from './components/Navigator';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import SharePage from './pages/SharePage';
import LoaderPage from './pages/LoaderPage';
import HoroscopePage from './pages/HoroscopePage';

import profile_img from './icons/profile.png';
import main_img from './icons/stars.png';
import share_img from './icons/share.png';

function App() {

  const {tg} = useTelegram();

  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  const images = [
    profile_img,
    main_img,
    share_img
  ]

  useEffect(() => {
    tg.ready();

    const imageElements = images.map(src => new Image());
    
    let loadedImagesCount = 0;
    
    imageElements.forEach((img, index) => {
        img.src = images[index];
        img.onload = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === images.length) {
                setIsImagesLoaded(true); 
            }
        };
        img.onerror = () => {
            console.error(`Ошибка загрузки изображения ${img.src}`);
        };
    });

  }, [images])

  if (!isImagesLoaded) {
    return <LoaderPage/>
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={'profile'} element={<ProfilePage />} />
        <Route path={'share'} element={<SharePage />} />
        <Route path={'horoscope'} element={<HoroscopePage />} />
      </Routes>
      <Navigator images={images} />
    </div>
  );
}

export default App;
