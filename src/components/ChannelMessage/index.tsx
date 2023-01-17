import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles'
export { Mentions } from './styles'

export interface Props { //as variaveis que terei
  author: string;
  date: string;
  content: string | React.ReactElement| React.ReactNode; // entao o conteudo da mensagem pode ser tanto uma string = letrras tanto um elemento react quanto outro elemento react
  hasMetion?: boolean; //pra ver se alguem te marcou na mensagen
  //boolean pode ser que seja true ou false
  //isBot segnifica o que a pessoa que te mandou essa mensagen o author ele e um bot se sim especifica isso para midar a mensagem
  isBot ?: boolean;
}

const ChannelMessage: React.FC <Props> = ({
  author,//receber as Props
  date,
  content,
  hasMetion,
  isBot
}) => {
  return ( // em isBot vou colocar se ele e bot ou nao por que se ele for bot ai eu deixo a tag de bot
  //className eu vou dizer se a pessoa mencionou vc eu vou dizer que e pessoa colocou metions se nao nada 
  //isBot se a pessoa for bot eu vou especificar a classe bot se nao coloco nada
    <Container className={hasMetion ? 'metion' : ''}> 
      <Avatar className={isBot ? 'bot' : ''}/>

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
  
}

export default ChannelMessage;