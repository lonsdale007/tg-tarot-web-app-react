import React, { useEffect, useState } from "react";
import { useTelegram } from '../hooks/useTelegram';

import '../styles/HoroscopePage.css';

import Horoscopes from "../components/Horoscopes";
import LoaderPage from "../pages/LoaderPage";

import aries_img        from '../icons/horoscopes/1aries.png';
import taurus_img       from '../icons/horoscopes/2taurus.png';
import gemini_img       from '../icons/horoscopes/3gemini.png';
import cancer_img       from '../icons/horoscopes/4cancer.png';
import leo_img          from '../icons/horoscopes/5leo.png';
import virgo_img        from '../icons/horoscopes/6virgo.png';
import libra_img        from '../icons/horoscopes/7libra.png';
import scorpio_img      from '../icons/horoscopes/8scorpio.png';
import sagittarius_img  from '../icons/horoscopes/9sagittarius.png';
import capricorn_img    from '../icons/horoscopes/10capricorn.png';
import aquarius_img     from '../icons/horoscopes/11aquarius.png';
import pisces_img       from '../icons/horoscopes/12pisces.png';

const HoroscopePage = () => {

    const {tg} = useTelegram();

    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    const images = [
        aries_img,
        taurus_img,
        gemini_img,
        cancer_img,
        leo_img,
        virgo_img,
        libra_img,
        scorpio_img,
        sagittarius_img,
        capricorn_img,
        aquarius_img,
        pisces_img
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
        <div className="horoscope_page">
            <span className="horoscope_title">Гороскоп</span>
            <Horoscopes images={images} />
        </div>
    );
};

export default HoroscopePage;