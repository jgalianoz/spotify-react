import React from 'react';
import styled from 'styled-components';

const ContainerMessages = styled.div`
  height: 100%;
`;

const ListMessage = styled.ul`
  height: 216px;
  list-style: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

const Message = styled.li`
  padding: 1em;
`;

const Title = styled.h4`
  padding: 0;
  font-size: 20px;
  color: #ec474a;
  text-align: center;
  width: 300px;
  margin: 0 auto;
`;

const Avatar = styled.figure`
  text-align: center;
  margin: 10px 0 0;
  > img {
    border-radius: 100%;
  }
`;

const RenderMessage = ({ message }) => (
  <ContainerMessages>
    <Avatar>
      <img
        src="https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg"
        width="100"
      />
    </Avatar>
    <Title>
      Hola, soy monokuBot en que puedo ayudarte ?
    </Title>
    <ListMessage>
      {message.map(item => {
        return <Message>{ item.message || item.message_me }</Message>
      })

      }
    </ListMessage>
  </ContainerMessages>
);

export default RenderMessage;
