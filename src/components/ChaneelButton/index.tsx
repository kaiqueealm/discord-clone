import React from 'react';

import { Container, HashTagIcon, InviteIcon, SettingsIcons } from './styles'

export interface Props {
  channelName: string // string e numero
  selected?: boolean // e true ou false ? e opcinal quando coloca interrogação 

}

const ChaneelButton: React.FC<Props> = ({
  channelName,//embaixo de const agente recebe as props que segnifuca propiedade
  selected
}) => {
  
  return (// em classname do container se a pessoa selecionou que o container ele esta ativo active se a pessoa nao selecionou vou dizer que ele nao esta ativo nao tera nada ira ser uma string vazia
    <Container className={selected ? 'active' : ''}> 
      <div>
        <HashTagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcons />
      </div>
    </Container>
  );
  
}

export default ChaneelButton;
