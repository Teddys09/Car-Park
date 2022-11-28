import React from 'react';
import {
  Container,
  Image,
  Location,
  Name,
  PropertyContainer,
  PropertyImg,
  PropertyTitle,
  RatingContainer,
  Space,
} from './ParkCard.styles';
import ParkImage from '../../assets/images/parking.jpg';
import Camera from '../../assets/logo/camera-solid.svg';
import Guard from '../../assets/logo/person-military-pointing-solid.svg';
import Lightning from '../../assets/logo/bolt-lightning-solid.svg';

import Rating from './Rating';
import { useNavigate } from 'react-router-dom';

type IParkCard = {
  _id: string;
  name: string;
  location: string;
  rating: number;
  space: number;
  property: {
    camera: boolean;
    security: boolean;
    charging: boolean;
  };
};

const ParkCard = (park: IParkCard) => {
  const navigate = useNavigate();

  return (
    <Container
      key={park?._id}
      onClick={() => navigate('/Park?_id=' + park._id)}
    >
      <Name>{park.name}</Name>
      <Image src={ParkImage} alt="parking" />
      <Location>Location: {park.location}</Location>
      <Space>Available space: {park.space}</Space>
      <RatingContainer>
        <Rating rating={park.rating} />
      </RatingContainer>
      <PropertyContainer>
        <PropertyTitle>Feature(s) :</PropertyTitle>
        {park.property.camera ? (
          <PropertyImg src={Camera} alt="camera" />
        ) : null}
        {park.property.security ? (
          <PropertyImg src={Guard} alt="guard" />
        ) : null}
        {park.property.charging ? (
          <PropertyImg src={Lightning} alt="lightning" />
        ) : null}
      </PropertyContainer>
    </Container>
  );
};

export default ParkCard;
