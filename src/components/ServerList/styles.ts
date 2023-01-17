import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center; //alinha todos os itens ao centro

  background-color: var(--tertiary);
  padding: 11px 0; //a distancia entre o servidor e a borda
  
  max-height: 100vh; // pra oculpa a tela inteira
  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px; // entre a linha e o servidor bolinha tem 8px
  
`;

// crlt + : serve pra fazer um comentario