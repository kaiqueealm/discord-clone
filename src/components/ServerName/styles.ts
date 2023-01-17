import styled from 'styled-components'
import { ExpandMore } from 'styled-icons/material'    

export const Container = styled.div`
  display: flex; //por que o display flex para separar a flechinha do nome  servidor 
  align-items: center; //por que eu quero deixar os dois centralizado na mesma linha
  justify-content: space-between; // ele força a flechinha ficar o maximo pra direita possivel e nome tambem 
  padding: 0 11px 0 16px;

  background-color: var(--secondary);
  box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px; //para ficar com uma sobrinha entre os elementos grids

  z-index: 2;

`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white); 

`

export const ExpanIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`