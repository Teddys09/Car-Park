import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: auto;
  height: 9vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FooterImg = styled.img`
  width: 6vh;
  height: 70%;
`;
const TitleFooter = styled.h1`
  font-size: 28px;

  font-weight: 700;
  color: #285b69;
`;
export { FooterContainer, FooterImg, TitleFooter };
