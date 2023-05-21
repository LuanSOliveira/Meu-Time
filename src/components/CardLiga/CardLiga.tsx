import { AppContext } from '../../context/context'
import { useContext } from 'react';
import { ILigas } from '../../interfaces/Interfaces'
import styles from './CardLiga.module.scss'

interface PropsCardLiga{
    liga: ILigas
}

const CardLiga = ({liga}:PropsCardLiga) => {
    const {setLigaSelecionada} = useContext(AppContext)

    function SelecionarLiga():void {
        setLigaSelecionada(liga)
    }

    return(
        <div className={styles.CardLiga} onClick={SelecionarLiga}>
            <img src={liga.logo} alt="Logotipo da Liga" />
            <h2>{liga.name}</h2>
        </div>
    )
}

export default CardLiga