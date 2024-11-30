import React from 'react';
import '../styles/ImgButton.css';

const ImgButton = (props) => {
    return (
        <img {...props} className={'img_button ' + props.className} />
    );
};

export default ImgButton;