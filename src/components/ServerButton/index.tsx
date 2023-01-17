import React from 'react';

import Logo from '../../assets/Logo.svg'

import { Button } from './styles';

export interface Props{//retorna uma interface de props
  selected?: boolean; // retorna uma selected ela vai ser  que significa true ou false / ja o selected funciona quando alguem clica
  isHome?: boolean; // e a parte roxinha do discord se o home for true vai ficar roxo
  hasNotifications?: boolean; // se tem alguma notificação branquinha do lado
  metions?: number; // vai ser um numero quando alguem te menciona ai vc pode colocar um numero de menções 

  // a props vai ter que ser exportada para o nosso estilos e tambem receber no react funtional company

}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  metions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      metions={metions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt='Rocktseat'/>} {/* se o botao for true eu vou mostra o logo da rocktseat caso contrario não vai mostra nada */}
    </Button>
  );
}

export default ServerButton;