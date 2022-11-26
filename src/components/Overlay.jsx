import React, { Fragment, useState, useEffect } from 'react';
import loadingGif from '../assets/img/load.gif'

const Overlay = () => {
    return (
        <>
            <div id="overlay">
                <div className="text-center">
                    <div className="spinner">
                        <img src={loadingGif} width="100px" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overlay;