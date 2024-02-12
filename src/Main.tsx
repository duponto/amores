import Button from '@mui/material/Button';
import './Main.css';
import salsichas from './assets/images/salsichas.png'
import { useSnackbar } from 'notistack';
import { useState } from 'react';

function Main() {

  const [lastMessageIndex, setLastMessageIndex] = useState<Number>(0)

  const {enqueueSnackbar} = useSnackbar();

  const errouMessages = [
    "Desculpe, botão errado",
    "Acredito que o mouse tenha deslizado",
    "Você é um ser humano, comete erros, tente de novo",
    "Ops, parece que houve um equívoco",
    "Parece que você cometeu um engano",
  ]

  const acertouClique = () => {
    enqueueSnackbar(
      "isso morzi botão certo",
      {variant: "success", hideIconVariant: true, anchorOrigin:{horizontal: "center", vertical:"top"}}
    )
  }

  const errouClique = () => {
    let randomIndex = Math.floor(Math.random() * errouMessages.length);
    while (lastMessageIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * errouMessages.length);
    }      
    enqueueSnackbar(
      errouMessages[randomIndex],
      {variant: "error", hideIconVariant: true, anchorOrigin: {horizontal: "center", vertical: "bottom"}}
    )
    setLastMessageIndex(randomIndex)
  }

  return (
    <div>
      <label>nós</label>
      <img src={salsichas} alt='dois salsichas lindinhos nós pena q n carregou'/>
      <p>DAÍ BEM NÓS PRA TODO O SEMPRE DAÍ NÉ?</p>
      <div className='botoes'>
        <Button color="success" variant='contained'onClick={acertouClique}>SIM DAÍ É BEM NÓS PRA SEMPRE</Button>
        <Button color="error" variant='contained' onClick={errouClique}>não 😖😭</Button>
      </div>
    </div>
  );
}

export default Main;
