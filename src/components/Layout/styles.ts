import styled from 'styled-components';


// separa em varias linhas 

//SL - Server List
//SN - Server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel data
//UL - User list
//UI - User Info

export const Grid = styled.div` // agente ta criando uma div estilizada
  display: grid;

  grid-template-columns: 71Px 240px auto 240px; //colunas
  grid-template-rows: 46px auto 52px; //linhas


  grid-template-areas: 
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

    height: 100vh; //para oculpar 100% do tamanho da tela 
  ;


`;
