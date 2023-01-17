import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator, } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton metions={3}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton metions={72}/>
      <ServerButton />
      <ServerButton />
    </Container>
  );
}

export default ServerList;