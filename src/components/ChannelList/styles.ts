import styled from 'styled-components'
import { Add } from 'styled-icons/material'; 

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column; //agora agente vai criar em coluna tudo embaixo do outro se fosse em linha seria row
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
  
`;

export const Category = styled.div`
  display: flex; //pra manter uma coisa do lado da outra 
  align-items: center; // pra manter tudo centralizado na mesma linha
  justify-content: space-between; //para separar bastante um do outro
  margin-bottom: 6px;

  >span { // agente quer que esse texto fique com letra maiuscula 
    text-transform: uppercase; //para o texto ficar com letra maiuscula
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);

  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
  
`;
