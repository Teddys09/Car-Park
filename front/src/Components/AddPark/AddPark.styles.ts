import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #2195a4;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

const Form = styled.form`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  padding-left: 10px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const CheckboxLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-top: 20px;
`;

const Checkboxspan = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 20px;
  font-weight: 600;
  margin-top: 3px;
  padding-left: 10px;
`;

const ButtonSubmit = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #2195a4;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

export {
  Container,
  Button,
  Form,
  Input,
  ButtonSubmit,
  Checkbox,
  CheckboxContainer,
  CheckboxLabelContainer,
  Checkboxspan,
};
