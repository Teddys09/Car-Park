import React from 'react';
import { FooterContainer, FooterImg, TitleFooter } from './Footer.styles';
import Car from '../../assets/logo/car-side-solid.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImg src={Car} alt="Car" />
      <TitleFooter>© 2022 Car Park</TitleFooter>
      <FooterImg src={Car} alt="Car" />
    </FooterContainer>
  );
};

export default Footer;
