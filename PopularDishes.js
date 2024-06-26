import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const DishesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const DishCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
  text-align: left;
`;

const DishImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DishContent = styled.div`
  padding: 15px;
`;

const DishTitle = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const DishDescription = styled.p`
  margin: 5px 0 10px;
  color: #777;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > svg {
    color: #ffd700;
    margin-right: 5px;
  }
`;

const dishes = [
  {
    title: 'Cheese Pasta',
    description: 'Penne pasta in tomato sauce with chicken and tomatoes',
    rating: 4.5,
    image: process.env.PUBLIC_URL + '/images/pasta.jpeg',
  },
  {
    title: 'Grill Chicken',
    description: 'Arrangement of thanksgiving day delicious dinner',
    rating: 4.5,
    image: process.env.PUBLIC_URL + '/images/grill_chicken.jpg',
  },
  {
    title: 'Chicken Biryani',
    description: 'Chicken biryani in a bowl with a lime slice and leaf and egg top view',
    rating: 4.5,
    image: process.env.PUBLIC_URL + '/images/chicken_biryani.jpg',
  },
];

const PopularDishes = () => {
  return (
    <Section>
      <h2>Our Popular Dishes!</h2>
      <DishesContainer>
        {dishes.map((dish, index) => (
          <DishCard key={index}>
            <DishImage src={dish.image} alt={dish.title} />
            <DishContent>
              <DishTitle>{dish.title}</DishTitle>
              <Rating>
                <FaStar />
                <span>{dish.rating}</span>
              </Rating>
              <DishDescription>{dish.description}</DishDescription>
            </DishContent>
          </DishCard>
        ))}
      </DishesContainer>
    </Section>
  );
};

export default PopularDishes;
