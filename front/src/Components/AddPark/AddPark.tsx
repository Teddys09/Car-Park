import axios from 'axios';
import React, { useState } from 'react';
import {
  Button,
  ButtonSubmit,
  Checkbox,
  CheckboxContainer,
  CheckboxLabelContainer,
  Checkboxspan,
  Container,
  Form,
  Input,
} from './AddPark.styles';
import { useSelector } from 'react-redux';

// name: { type: String, required: true, unique: true },
// description: { type: String, required: true },
// location: { type: String, required: true },
// rating: { type: Number, required: true },
// space: { type: Number, required: true },

type IFormData = {
  name: string;
  property: {
    camera: boolean;
    security: boolean;
    charging: boolean;
  };
  location: string;
  rating: number;
  space: number;
  maxSpace: number;
};

const AddPark = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const token = useSelector((state: any) => state.token);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData: IFormData = {
      name: e.target.name.value,
      property: {
        camera: e.target.camera.checked,
        security: e.target.security.checked,
        charging: e.target.charging.checked,
      },
      location: e.target.location.value,
      rating: Number(e.target.rating.value),
      space: Number(e.target.space.value),
      maxSpace: Number(e.target.space.value),
    };
    console.log(formData);

    axios
      .post('http://localhost:5000/api/park/add', formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsClicked(false);
  };

  return (
    <Container>
      <Button onClick={() => setIsClicked(true)}>Add new Park</Button>
      <Form
        action="submit"
        className={isClicked ? 'flex' : ''}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input type="text" placeholder="Name" name="name" />
        <Input type="text" placeholder="Location" name="location" />
        <Input type="number" placeholder="Rating" name="rating" />
        <Input type="number" placeholder="Space" name="space" />
        <CheckboxContainer>
          <CheckboxLabelContainer>
            <Checkboxspan>Camera</Checkboxspan>
            <Checkbox type="checkbox" name="camera" value="camera" />
          </CheckboxLabelContainer>
          <CheckboxLabelContainer>
            <Checkboxspan>Security</Checkboxspan>
            <Checkbox type="checkbox" name="security" value="security" />
          </CheckboxLabelContainer>
          <CheckboxLabelContainer>
            <Checkboxspan>Charging</Checkboxspan>
            <Checkbox type="checkbox" name="charging" value="charging" />
          </CheckboxLabelContainer>
        </CheckboxContainer>

        <ButtonSubmit type="submit">Add Park</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default AddPark;
