import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #285b69;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export { Container, Button, ButtonContainer, FormContainer };
