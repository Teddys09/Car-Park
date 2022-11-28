import styled from 'styled-components';

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

export { Container, VehicleContainer, VehicleImg };
