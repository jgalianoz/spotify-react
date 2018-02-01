import React from 'react';

import styled from 'styled-components';

const MainSection = styled.section`
  background-image: url('http://localhost:3001/assets/images/mainSection.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 600px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Home = () => (
  <section>
    <MainSection>
      <Title>
        Música para todos
      </Title>
      <div>
        <a href="#">
          Consigue tu musica favorita
        </a>
      </div>
    </MainSection>
  </section>
);

export default Home;
