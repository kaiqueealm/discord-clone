import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px) ; // vai ser um cauculo entre altura maxima da tela meno o pedaço de cima
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 4px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;

  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);

  }
`;


export const Role = styled.span`
  margin-top: 15px;

  text-transform: uppercase; // em upercase totalmente maisculo
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 4px;
  background-color: transparent;
  transition: background .2s;
  &:hover{
    background: rgba(255, 255, 255. 0.1);

  }

  >strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis; // para cobrir todo texto que estiver faltando com 3 pontos
    overflow: hidden;
  }

  > span {
    margin-left: 9px; // e uma teg que se chama bot esse espan

    background-color: var(--discord);
    color: var(--white); //cor do texto do bot
    border-radius: 4px; // para dar uma arredondada
    padding: 4px 5px; //para dar um polco de espaço

    text-transform: uppercase; //tudo maisculo
    font-weight: bold;
    font-size: 11px;

  }
`;

export const Avatar  = styled.div`
  flex-shrink: 0; //para nao esmaga o avatar

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--primary);
  
  &.bot{
    background-color: var(--mention-detail);
    
  }
  // se a pessoa for um bot eu quero mudar a cor do perfil da pessoa quero que fique amarelo
`;

