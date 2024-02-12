import Button from '@mui/material/Button';
import './Main.css';
import salsichas from './assets/images/salsichas.png'
import nos from './assets/images/nos.jpg'
import { useSnackbar } from 'notistack';
import { forwardRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//https://mui.com/material-ui/react-dialog/#system-AlertDialogSlide.tsx

function Main() {
  
  const [lastMessageIndex, setLastMessageIndex] = useState<Number>(0)
  const [errorWidth, setErrorWidth] = useState<number>(150)
  const [errorHeight, setErrorHeight] = useState<number>(100)
  const [rightWidth, setRightWidth] = useState<number>(150)
  const [rightHeight, setRightHeight] = useState<number>(100)
  const [fontSize, setFontSize] = useState<number>(15)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [marginRight, setMarginRight] = useState<number>(10)

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
      {variant: "success",
       hideIconVariant: true, 
       anchorOrigin:{horizontal: "center", vertical:"top"},
      }
    )
    setErrorWidth(150)
    setErrorHeight(100)
    setFontSize(15)
    setRightWidth(150)
    setRightHeight(100)
    setOpenDialog(true)
  }

  const errouClique = () => {
    let randomIndex = Math.floor(Math.random() * errouMessages.length);
    while (lastMessageIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * errouMessages.length);
    }

    enqueueSnackbar(
      errouMessages[randomIndex],
      {variant: "error", hideIconVariant: true, preventDuplicate: true}
    )

    if(errorWidth > 125) setErrorWidth(errorWidth - 6)
    if(errorHeight > 20) setErrorHeight(errorHeight - 6)
    if(marginRight > 0) setMarginRight(marginRight - 1)
    setFontSize(fontSize + 2)
    setRightWidth(rightWidth + 20)
    setRightHeight(rightHeight + 20)
    setLastMessageIndex(randomIndex)
  }

  return (
    <div>
      <label>nós</label>
      <img className='salsichas' src={salsichas} alt='dois salsichas lindinhos nós pena q n carregou'/>
      <p>DAÍ BEM NÓS PRA TODO O SEMPRE DAÍ NÉ?</p>
      <div className='botoes'>
        <Button color="success" variant='contained'onClick={acertouClique}
          sx={{width: rightWidth, height: rightHeight, position: 'absolute', fontSize: fontSize, marginRight: marginRight+'rem'}}>
          Sim meu amor
        </Button>
        <Button color="error" variant='contained' onClick={errouClique}
          sx={{width: errorWidth, height: errorHeight, marginLeft: '10rem'}}>
          não 😖😭
        </Button>
      </div>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>
          Que bom que você também acha isso 💖
        </DialogTitle>
        <DialogContent>
          <img src={nos} width='100%' height='100%' alt="nós bem lindos"/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Main;
