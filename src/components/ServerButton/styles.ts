import styled from 'styled-components';

import   { Props }  from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center; //alinhado em forma vertical
  justify-content: center; //alinhado em forma horizontal
  flex-shrink: 0;// pra evitar qua o servidor bolinha fique espremido  

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ?  'var(--rocketseat)' : 'var(--primary)'
}; //se o botao for a home agente vai utilizar a cor da rocktseat caso contrario vai ser a cor primaria 
  position: relative;
 cursor: pointer;//para deixar a maozinha quando passar o mouse

 >img {
  width: 24px; //largura
  height: 24px; //autura
 }

 &::before{
  width: 9px;
  height: 9px;

  position: absolute; //a position absolute so funciona se tiver position relative
  left: -12px;
  top: calc(50% - 4.5px);

  background-color: var(--white);
  border-radius: 50%;

  content: '';  // 
  display: ${(props) => (props.hasNotifications ? 'inline' : 'none')}; // se a pessoa tiver notificações agente vai deixar inline se a pessoa nao tiver notificações none
 }

 &::after{ //vai fazer a notificação vermelha e a bolinha branca
  background-color: var(--notification);
  width: auto;// a largura vai ser automatica
  height: 16px;

  padding: 0 4px;

  position: absolute;
  bottom: -4px;
  right: -4px;

  border-radius: 12px;
  border: 4px solid var(--quaternary);

  text-align: right;
  font-size: 13px;
  font-weight: bold;
  color: var(--white);

  content: '${props => props.metions && props.metions}'; //o numero vai ser dinamico de acordo com a quantidade de menções que as pessoa mencionarão as pessoas vai verificar se a pessoa tem menções se ela tiver eu vou pegar o numero de menções 
  display: ${props => props.metions && props.metions> 0 ? 'iniline' : 'none'}; // agente precisa esconder caso agente nao tenha notificações , caso a pessoa tenha notificações e seja maior do que zero se a pessoa tiver mais do que zero menções ai agente ira mostra isso na tela caso contrario nao iremos mostra nada na tela 
 }
 transition: border-radius .2s, background-color .2s;

 &.active,
 &:hover{
  border-radius: 16px;// quando meu butao tiver ativo ou alguem passar o mouse em cima o borde radius dele vai ficar um polco mais quadrado
  background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}; //se for o botão da casa agente vai continuar com a cor roxa se nao for a cor da casa agente vai continuar com a cor azul
 } 


`;
