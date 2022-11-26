import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #f2f2f2;
  font-size: 18px;
  font-weight: 500;
  padding: 0 10px;
  margin-top: 20px;
  text-align: center;
  // border on selected input none
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #285b69;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
`;

export { FormStyle, Input, Button, Error };
