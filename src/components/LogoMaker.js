import React from 'react';
import '../styles/LogoMaker.css';
import signumLogo from '../assets/signum_logo.png';

function LogoMaker(){
    return(
        <div>
            <a href="https://signum.win/" className="LogoMaker__link">
                <div className='LogoMaker__container'>
                    <div>
                        <img className="TellorLogo" style={{width: "100px", height: "105px"}} src={signumLogo} alt="Signum Logo" />
                    </div>
                    <div className='LogoMaker__unstop'>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default LogoMaker;