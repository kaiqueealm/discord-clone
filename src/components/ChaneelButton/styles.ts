import styled from 'styled-components'
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings} from 'styled-icons/material' //PersonAdd icone de adiconar pessoa

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; //deixar a caichinha da direita o mais longe possivel da caicnhinha da direita
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;

  }

  > div span {
    margin-left: 5px; //para separar da hashitag
    color: var(--senary); //esse span seria no caso o chat-livre

  }

  &:hover, &.active{
    background-color: var(--quinary); //para mudar a cor do fundo antes estava uma cor transparente
  } // quando eu passo o mouse por cima e um evento hover ou quando alguem clicar  no canal ele ta ativo iremos chamar active
  >div span {
    color: var(--white);
  } //mudar a cor do texto quando passa o mouse em cima para branco

`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);

  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcons = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 5px;

  color: var(--symbol);

  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
 
`;

