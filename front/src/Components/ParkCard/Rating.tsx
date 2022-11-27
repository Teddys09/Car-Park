import React from 'react';
import starGreen from '../../assets/logo/star_green.svg';
import starGrey from '../../assets/logo/star_grey.svg';
import { Img } from './Rating.styles';

type iRating = {
  rating: number;
};
const Rating = (rating: iRating) => {
  // function to display the stars according to the rating value
  const displayStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating.rating) {
        stars.push(<Img key={i} src={starGreen} alt="star" />);
      } else {
        stars.push(<Img key={i} src={starGrey} alt="star" />);
      }
    }
    return stars;
  };

  return <div>{displayStars()}</div>;
};

export default Rating;
