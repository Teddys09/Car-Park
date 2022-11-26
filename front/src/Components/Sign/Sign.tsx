import React, { useState } from 'react';
import Form from '../Form/Form';
import {
  Button,
  ButtonContainer,
  Container,
  FormContainer,
} from './Sign.styles';

const Sign = () => {
  const [selectedForm, setSelectedForm] = useState<boolean>(true);

  return (
    <Container>
      <ButtonContainer>
        <Button
          className={`${selectedForm ? '' : 'low-opacity'}`}
          onClick={() => setSelectedForm(true)}
        >
          Sign In
        </Button>
        <Button
          className={`${!selectedForm ? '' : 'low-opacity'}`}
          onClick={() => setSelectedForm(false)}
        >
          Sign Up
        </Button>
      </ButtonContainer>
      <FormContainer>
        <Form boolean={selectedForm} />
      </FormContainer>
    </Container>
  );
};

export default Sign;
