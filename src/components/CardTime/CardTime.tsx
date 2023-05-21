import { AppContext } from '../../context/context'
import { ITimes } from '../../interfaces/Interfaces'
import styles from './CardTime.module.scss'
import { useContext } from 'react'

interface PropsCardTime{
    time: ITimes
}

const CardTime = ({time}:PropsCardTime) => {
    const {setTimeSelecionado} = useContext(AppContext)

    function SelecionarTime():void{
        setTimeSelecionado(time)
    }

    return(
        <div className={styles.CardTime} onClick={SelecionarTime}>
            <img src={time.logo} alt="Logotipo do Time" />
            <h2>{time.name}</h2>

        </div>
    )
}

export default CardTime