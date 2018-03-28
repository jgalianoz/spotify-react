import React from 'react';

import styled from 'styled-components';

const HeaderCont = styled.header`
  background-color: #000000;
`;

const HeaderWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  figure {
    padding: 0;
    margin: 0;
  }
`;

const Header = () => (
  <HeaderCont>
    <HeaderWrapper>
      <figure>
        <img
          src="http://localhost:3001/assets/images/logo.png"
          width="150"
          alt="Spotify"
        />
      </figure>
    </HeaderWrapper>
  </HeaderCont>
);

export default Header;
