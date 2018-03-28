import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';
import Information from '../Information/Information';

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
  background-color: #ec474a;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 30px;
  color: #FFFFFF;
  max-width: 700px;
  margin: 0 auto
`;

const Home = () => (
  <section>

    <Header />
    <MainSection>
      <Title>
        We go beyond
      </Title>
      <Description>
        ¡Si quieres conocernos, monokuBot puede ayudarte!
      </Description>
      <div className="containerButton">
        <Link href="#">
          Lest go monokuBot
        </Link>
      </div>
    </MainSection>

    <Information />

  </section>
);

export default Home;
