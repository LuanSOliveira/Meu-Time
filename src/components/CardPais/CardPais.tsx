import { useContext } from 'react'
import { IPaises } from '../../interfaces/Interfaces'
import styles from './CardPais.module.scss'
import { AppContext } from '../../context/context'

interface PropsCardPais{
    pais: IPaises
}

const CardPais = ({pais}:PropsCardPais) => {
    const {setPaisSelecionado} = useContext(AppContext)

    function EscolherPais():void {
        setPaisSelecionado(pais)
    }

    return(
        <div className={styles.CardPais} onClick={EscolherPais}>
            <img src={pais.flag} alt="Bandeira do País" />
            <h2>{pais.name}</h2>
        </div>
    )
}

export default CardPais