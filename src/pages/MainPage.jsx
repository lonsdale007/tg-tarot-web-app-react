import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTelegram } from '../hooks/useTelegram';

import '../styles/MainPage.css';

import Button from '../components/Button';

const MainPage = () => {

    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="main_page">
            <span className="app_name">astro</span>
            <div className="buttons_container">
                <Link to={'horoscope'} className="link_main">
                    <Button>Гороскоп</Button>
                </Link>
                <Button>Совместимость</Button>
                <Button>Натальная карта</Button>
            </div>
        </div>
    );
};

export default MainPage;