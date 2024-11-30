import React from "react";
import '../styles/Navigator.css';
import ImgButton from "./ImgButton";

import { Link } from "react-router-dom";

const Navigator = (props) => {

    return (
        <div className="navigator">
            <Link to={'/profile'}>
                <ImgButton src={props.images[0]} alt='profile_icon' />
            </Link>
            <Link to={'/'}>
                <ImgButton src={props.images[1]} alt='starts_icon' />
            </Link>
            <Link to={'/share'}>
                <ImgButton src={props.images[2]} alt='share_icon' />
            </Link>
        </div>
    );
};

export default Navigator;