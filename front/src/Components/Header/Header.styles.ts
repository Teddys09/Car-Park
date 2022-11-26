import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
const rotate = keyframes`
from {  transform: rotate(0deg); }
to { transform: rotate(90deg); }
`;
const HeaderContainer = styled.header`
  border-bottom: 1px solid #ddd;
  height: 9vh;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
  background-color: #fff;
  .rotate {
    animation: ${rotate} 1s;
    animation-fill-mode: forwards;
  }
`;
const ImageHeader = styled.img`
  width: 10vh;
  height: 70%;
  background: transparent;
`;

const TitleHeader = styled.h1`
  font-size: 32px;

  font-weight: 700;
  color: #285b69;
`;

const LinkHeader = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavIconContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavIconImage = styled.img`
  width: 30px;
  height: 30px;
`;

const Menu = styled.div`
  position: absolute;
  top: 9vh;
  left: 0;
  width: 100%;
  height: 20vh;
  background: #285b69;
  z-index: 2;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  a {
    color: white;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding: 8px 0;
  }
`;

// export all the styled components
export {
  HeaderContainer,
  ImageHeader,
  TitleHeader,
  LinkHeader,
  LinkContainer,
  NavIconContainer,
  NavIconImage,
  Menu,
};
