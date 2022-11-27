import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Name = styled.h1`
  font-size: 26px;
  font-weight: 600;
  padding: 5px;
`;

const Image = styled.img`
  width: 100px;
  height: 150px;
`;

const Location = styled.h2`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 5px;
`;

const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 5px;
`;
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
`;

const PropertyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 5px;
`;

const PropertyImg = styled.img`
  width: 40px;
  height: 40px;
`;

const PropertyTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
`;

export {
  Container,
  Name,
  Image,
  Location,
  RatingContainer,
  Description,
  Space,
  PropertyContainer,
  PropertyImg,
  PropertyTitle,
};
