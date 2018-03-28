import React, { Component } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client'

import RenderMessage from './RenderMessage';

const socket = io('http://localhost:3000');

const ContainerChat = styled.section`
  width: 50%;
  padding: 1em;
`;

const Wrapper = styled.div`
  border: 1px solid;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  width: 100%;
  background-color: #000000;
  height: 50px;
  box-sizing: border-box;

`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  display: block;
  outline: none;
  resize: none;
`

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    socket.on('message', (message) => {
      this.state.messages.push(message);
      const messages = this.state.messages;
      this.setState({
        messages,
      });
    });

    this.sendMessage();
  }

  sendMessage() {
    this.text.addEventListener('keypress', event => {
      if (event.keyCode === 13) {
        const message = { message: this.text.value, send: 'me' };
        this.state.messages.push(message)
        socket.emit('new_message', message);
        this.text.value = '';
        event.preventDefault();
      }
    });
  }

  render() {
    return(
      <ContainerChat>
        <Wrapper>
          <Header>

          </Header>

          <RenderMessage message={this.state.messages} />

          <Form method="POST" onSubmit={this.sendMessage}>
            <TextArea
              rows="1"
              placeholder="Write message..."
              autoComplete="false"
              autoFocus="true"
              innerRef={(text) => { this.text = text }}>
            </TextArea>
          </Form>
        </Wrapper>
      </ContainerChat>
    );
  }
}

export default Chat;
