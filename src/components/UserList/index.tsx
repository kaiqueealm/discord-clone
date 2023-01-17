import React from 'react';

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname:string; //vai ser um nome e vai ser obrigatorio
  isBot?: boolean;
}

const UserRow: React.FC <UserProps>= ({ nickname, isBot }) => {
  return (  // no avatar se a pessoa for um bot eu vou colocar uma classe bot por que ai vai ativar a cor amarela dentro do cssse a pessoa nao for bot dai nao vou ativar nada
    <User>
      <Avatar className={isBot ? 'bot' : ''} /> 

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
} //componente secundario 

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname = "Kaique Almeida"/>

      <Role>Offiline - 18</Role>
      <UserRow nickname = "Diego Fernandes" isBot />
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      <UserRow nickname = "Fulano"/>
      

    </Container>
  );
  
}

export default UserList;