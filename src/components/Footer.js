import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import signumLogo from '../assets/signum_logo.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__Left">
        <Link to="/" className="Footer__LogoContainer">
          <div>
            <img className="TellorLogo" style={{width: "50px"}} src={signumLogo} alt="Signum Logo" />
          </div>
          <div className="Footer__Tagline">
          </div>
        </Link>
        <p>&copy; 2024 SIGNUM</p>
        <div className="Footer__SocialContainer">
          <a
            href="https://github.com/AvantgardeBlockchainSolutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://x.com/SignumOracle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
      </div>
      <div className="Footer__Right">
        <p>Links</p>
        <a
          href="http://signum.win"
          alt="http://docs.signum.win"
          target="_blank"
          rel="noopener noreferrer"
        >
          signum.win
        </a>
        <a
          href="http://docs.signum.win"
          alt="http://docs.signum.win"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.signum.run
        </a>
      </div>
    </div>
  );
};

export default Footer;
