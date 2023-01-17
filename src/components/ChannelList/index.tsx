import React from 'react';

import {  Container, AddCategoryIcon, Category } from './styles'

import ChaneelButton from '../ChaneelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>CANAIS DE TEXTO</span>
        <AddCategoryIcon />
      </Category>

      <ChaneelButton channelName='chat-livre'/>
      <ChaneelButton channelName='trabalho'/>
      <ChaneelButton channelName='estudo'/>
      <ChaneelButton channelName='palmeiras'/>
      <ChaneelButton channelName='csgo'/>
    </Container>
  );
  
}

export default ChannelList;