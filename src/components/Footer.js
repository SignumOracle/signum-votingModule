import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import { ReactComponent as Discord } from "../assets/Discord.svg";
import { ReactComponent as TellorWhite } from '../assets/signum_logo.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__Left">
        <Link to="/" className="Footer__LogoContainer">
          <div>
            <TellorWhite style={{ width: '150px', height: '150px' }} className="LogoMaker__Title"/>
          </div>
          <div className="Footer__Tagline">
          </div>
        </Link>
        <p>&copy; 2024 Signum</p>
        <div className="Footer__SocialContainer">
          <a
            href="https://github.com/signum-win"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord />
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
          docs.signum.win
        </a>
      </div>
    </div>
  );
};

export default Footer;
