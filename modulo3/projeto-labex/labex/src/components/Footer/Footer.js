import React from "react";
import { MainContainer } from "./styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <MainContainer>
      <div>Todos os direitos reservados</div>
      <div>
        <a href="www.facebook.com.br">
          <FacebookIcon className="redeSocial" fontSize="large" />
        </a>
        <a href="www.Instagram.com.br">
          <InstagramIcon className="redeSocial" fontSize="large" />
        </a>
        <a href="www.twitter.com.br">
          <TwitterIcon className="redeSocial" fontSize="large" />
        </a>
      </div>
    </MainContainer>
  );
};

export default Footer;
