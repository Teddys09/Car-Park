import React, { useState } from 'react';
import { Button, ButtonContainer, Container } from './Sign.styles';

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
    </Container>
  );
};

export default Sign;
