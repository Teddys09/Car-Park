import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background: #2195a4;
  padding: 20px;
  width: 70%;
  margin-top: 20px;
  border: 3px solid #285b69;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: white;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
  color: white;
`;

export { Container, Info, Title, Text };
