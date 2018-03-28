import React from 'react';
import styled from 'styled-components';

import jsonCards from './card.json';

const ContainerGrid = styled.section`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
`;

const Card = styled.div`
  width: 50%;
  height: 50%;
  font-size: 0;
`;

const GridImage = () => {
  const cards = JSON.parse(jsonCards);
  return (
    <ContainerGrid>
      {
        cards.cards.map(item => {
          return (
            <Card key={item.key}>
              <img src={item.image_url} width="100%"/>
            </Card>
          )
        })
      }
    </ContainerGrid>
  )
};

export default GridImage;
