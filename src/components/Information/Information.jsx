import React from 'react';
import styled from 'styled-components';

import GridImage from '../../molecules/GridImage/GridImage';

const ContainerInformation = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  border: '1px solid red';
`;

const Title = styled.h1`
  padding: 0;
  font-size: 48px;
  color: #2e2b2b;
  text-align: center;
`;

const Information = () => (
  <ContainerInformation>
    <Title>
      ¡Llegamos hasta lo imposible!
    </Title>
    <GridImage />
  </ContainerInformation>
);

export default Information;
