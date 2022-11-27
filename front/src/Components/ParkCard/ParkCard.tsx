import React from 'react';
import {
  Container,
  Image,
  Location,
  Name,
  PropertyContainer,
  PropertyImg,
  PropertyTitle,
  Rating,
  Space,
} from './ParkCard.styles';
import ParkImage from '../../assets/images/parking.jpg';
import Camera from '../../assets/logo/camera-solid.svg';
import Guard from '../../assets/logo/person-military-pointing-solid.svg';
import Lightning from '../../assets/logo/bolt-lightning-solid.svg';
import { useSelector } from 'react-redux';

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

const ParkCard = () => {
  const parks = useSelector((state: any) => state.parks);

  return (
    <>
      {parks.map((park: IParkCard) => (
        <Container key={park?._id}>
          <Name>{park.name}</Name>
          <Image src={ParkImage} alt="parking" />
          <Location>Location: {park.location}</Location>
          <Space>Available space: {park.space}</Space>
          <Rating>Rating: {park.rating}</Rating>
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
      ))}
    </>
  );
};

export default ParkCard;
