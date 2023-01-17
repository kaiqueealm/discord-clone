import styled from 'styled-components'    
import { Mic, Headset, Settings, } from 'styled-icons/material';


export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px

`
export const Profile = styled.div`
  display: flex;
  align-items: center;

`;

export const Avatar = styled.div`
  height: 32px;
  width: 32px;

  border-radius: 50%; // para nao ficar quadrado
  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  >strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }

  >span {
    color: var(--gray);
    font-size: 13px;

  }

`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) { // irei selecionar os dois icones tirando o microfone
    margin-left: 7px;

  }
`;

export const MicIcon = styled(Mic)`
  width: 24px;
  height: 24px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .2s;

  &:hover { //quando alguem passr o mouse encima do fone quero que fique com opacidade 100% cai ficar branco

  }
`;

export const HeadphoneIcon = styled(Headset)`
width: 24px;
  height: 24px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .2s;

  &:hover { //quando alguem passr o mouse encima do fone quero que fique com opacidade 100% cai ficar branco
  }
`;

export const SettingsIcon = styled(Settings)`
width: 24px;
  height: 24px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .2s;

  &:hover { //quando alguem passr o mouse encima do fone quero que fique com opacidade 100% cai ficar branco
  }
`;
