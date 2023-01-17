import styled from 'styled-components'


export const Container = styled.div`
   display: flex;
   align-items: center;
   
   padding: 4px 16px;
   margin-right: 4px;

   background-color: transparent; //por que uma mensgame no discord ela tem o fundo trasnparent se alguem te mencionar ficara amarela
   &.metions {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
   }

  & + div {
    margin-top: 13px;

  }

`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot{
    background-color: var(--mention-detail);

  }
`;

export const Message = styled.div`
  min-height: 40px;

  display: flex; //entre kaique almeida e a mensagem abaixo e em formato de coluna
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px; //coloca maia a direita do icone e kaiqur almeida


`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  
  > strong {
    color: var(--white);
    font-size: 16px;

  }

  > span {
    margin-left: 6px; // e uma teg que se chama bot esse espan

    background-color: var(--discord);
    color: var(--white); //cor do texto do bot
    border-radius: 4px; // para dar uma arredondada
    padding: 4px 5px; //para dar um polco de espaço

    text-transform: uppercase; //tudo maisculo
    font-weight: bold;
    font-size: 11px;  // cipaamos a tag de bot de outro componente
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;

  }
`;

export const Content  = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--white);

`;

export const Mentions = styled.span`
  color: var(--link); //quando vc for mrnsionado vai ficar com a cor azul
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }  //para quando passar o mouse em cima ficar com underline
`;
