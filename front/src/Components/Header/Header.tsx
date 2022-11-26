import Car from '../../assets/logo/car-side-solid.svg';

import React, { useState } from 'react';

import NavIcon from '../../assets/logo/bars-solid.svg';

import {
  HeaderContainer,
  TitleHeader,
  LinkContainer,
  LinkHeader,
  ImageHeader,
  NavIconContainer,
  Menu,
  NavIconImage,
} from './Header.styles';

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <HeaderContainer>
      <ImageHeader src={Car} alt="Car" />
      <TitleHeader>Car Park</TitleHeader>

      <LinkContainer>
        <LinkHeader to="/Home">Home</LinkHeader>
        <LinkHeader to="/Park">Park</LinkHeader>
      </LinkContainer>
      <NavIconContainer
        onClick={() => handleClick()}
        className={clicked ? 'rotate' : ''}
      >
        <NavIconImage src={NavIcon} alt="nav-icon" />
      </NavIconContainer>
      <Menu className={clicked ? 'flex' : ''}>
        <LinkHeader
          to="/Home"
          onClick={() => handleClick()}
          className={clicked ? 'block' : ''}
        >
          Home
        </LinkHeader>
        <LinkHeader
          to="/Park"
          onClick={() => handleClick()}
          className={clicked ? 'block' : ''}
        >
          Park
        </LinkHeader>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
