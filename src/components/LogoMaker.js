import React from 'react';
import '../styles/LogoMaker.css';
import { ReactComponent as TellorWhite } from '../assets/signum_logo.svg';

function LogoMaker(){
    return(
        <div>
            <a href="https://signum.win/" className="LogoMaker__link">
                <div className='LogoMaker__container'>
                    <div>
                        <TellorWhite style={{ width: '150px', height: '150px' }} className="LogoMaker__Title"/>
                    </div>
                    <div className='LogoMaker__unstop'>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default LogoMaker;