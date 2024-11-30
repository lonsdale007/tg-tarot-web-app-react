import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Horoscopes.css';

const Horoscopes = (props) => {

    return (
        <div className='horoscopes_container'>
            <div className='horoscopes_row'>
                <Link className='link' to={'/horoscope/aries'}>
                    <img className='horoscope_icon' src={props.images[0]} alt=''/>
                    <span>Овен</span>
                </Link>
                <Link className='link' to={'/horoscope/taurus'}>
                    <img className='horoscope_icon' src={props.images[1]} alt=''/>
                    <span>Телец</span>
                </Link>
                <Link className='link' to={'/horoscope/gemini'}>
                    <img className='horoscope_icon' src={props.images[2]} alt=''/>
                    <span>Близнецы</span>
                </Link>
            </div>
            <div className='horoscopes_row'>
                <Link className='link' to={'/horoscope/cancer'}>
                    <img className='horoscope_icon' src={props.images[3]} alt=''/>
                    <span>Рак</span>
                </Link>
                <Link className='link' to={'/horoscope/leo'}>
                    <img className='horoscope_icon' src={props.images[4]} alt=''/>
                    <span>Лев</span>
                </Link>
                <Link className='link' to={'/horoscope/virgo'}>
                    <img className='horoscope_icon' src={props.images[5]} alt=''/>
                    <span>Дева</span>
                </Link>
            </div>
            <div className='horoscopes_row'>
                <Link className='link' to={'/horoscope/libra'}>
                    <img className='horoscope_icon' src={props.images[6]} alt=''/>
                    <span>Весы</span>
                </Link>
                <Link className='link' to={'/horoscope/scorpio'}>
                    <img className='horoscope_icon' src={props.images[7]} alt=''/>
                    <span>Скорпион</span>
                </Link>
                <Link className='link' to={'/horoscope/sagittarius'}>
                    <img className='horoscope_icon' src={props.images[8]} alt=''/>
                    <span>Стрелец</span>
                </Link>
            </div>
            <div className='horoscopes_row'>
                <Link className='link' to={'/horoscope/capricorn'}>
                    <img className='horoscope_icon' src={props.images[9]} alt=''/>
                    <span>Козерог</span>
                </Link>
                <Link className='link' to={'/horoscope/aquarius'}>
                    <img className='horoscope_icon' src={props.images[10]} alt=''/>
                    <span>Водолей</span>
                </Link>
                <Link className='link' to={'/horoscope/pisces'}>
                    <img className='horoscope_icon' src={props.images[11]} alt=''/>
                    <span>Рыбы</span>
                </Link>
            </div>
        </div>

    );
};

export default Horoscopes;