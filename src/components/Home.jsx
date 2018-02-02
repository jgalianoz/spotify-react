import React from 'react';

import styled from 'styled-components';

const MainSection = styled.div`
  background-image: url('http://localhost:3001/assets/images/mainSection.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .containerButton {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  padding: 0;
  font-size: 48px;
  color: #FFFFFF;
`;

const Link = styled.a`
  padding: 18px 48px 16px;
  border-radius: 500px;
  color: #FFFFFF;
  background-color: #1db954;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`;

const Home = () => (
  <section>
    <MainSection>
      <Title>
        Música para todos
      </Title>
      <div className="containerButton">
        <Link href="#">
          Consigue tu musica favorita
        </Link>
      </div>
    </MainSection>
  </section>
);

export default Home;
