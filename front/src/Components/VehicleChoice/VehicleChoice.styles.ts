import styled from 'styled-components';

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  gap: 20px;
`;

const VehicleContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: #2195a4;
  padding: 5px;
  border-radius: 5px;
`;

const VehicleImg = styled.img`
  width: 100%;
  height: 100%;
`;

const FormParkTitle = styled.h2`
  margin-top: 20px;
  font-size: 26px;
  font-weight: 600;
  padding: 5px;
`;

export {
  GlobalContainer,
  Container,
  VehicleContainer,
  VehicleImg,
  FormParkTitle,
};
