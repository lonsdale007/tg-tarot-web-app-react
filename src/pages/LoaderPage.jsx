import React from "react";
import '../styles/LoaderPage.css';

import spinner from '../icons/spinner.gif';

const LoaderPage = () => {

    return (
        <div className="loader_page">
            <img className="loader_spinner" src={spinner} alt="spinner"/>
        </div>
    );
};

export default LoaderPage;