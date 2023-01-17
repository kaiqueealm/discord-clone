import React, { useRef, useEffect} from 'react'; //para o usario ver a mensagem mais recente vou usar um huserfevt

import ChannelMessage, { Mentions } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'


const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div) { // e se agente tiver sucesso ao tentar acesssar assim que a pessoa entra na pagina ao inves de achar scrrol em cima ele sera embaixo
      div.scrollTop = div.scrollHeight;

    }
  }, [messagesRef]);//iremos utilizar um hook useEffec assim que a pessoa carregar a pagina vamos pega essa função vamos pega uma div 

  return ( //nesse container tera uma lista de mensagens
  //InputWrapper> o que vai envolver o input
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
        <ChannelMessage
          author="Kaique Almeida"
          date="12/10/2023"
          content="hoje é meu aniversario"
        />
        ))}
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />
        <ChannelMessage 
          author="Diego Fernandes"
          date="12/10/2023"
          content={
            <>
              <Mentions>@Kaique Almeida</Mentions>, me carrega no csGo por favor?
            </>

          }
          hasMetion
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input  placeholder='Conversaem #chat-livre'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
  
}

export default ChannelData;