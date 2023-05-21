import { AppContext } from '../../context/context'
import styles from './CardTemporada.module.scss'
import { useContext } from 'react';

interface PropsCardTemporada{
    temporada: number
}

const CardTemporada = ({temporada}:PropsCardTemporada) => {
    const {setTemporadaSelecionada} = useContext(AppContext)

    function SelecionaTemporada():void{
        setTemporadaSelecionada(temporada)
    }

    return(
        <div className={styles.CardTemporada} onClick={SelecionaTemporada}>
            <h2>{temporada}</h2>
        </div>
    )
}

export default CardTemporada