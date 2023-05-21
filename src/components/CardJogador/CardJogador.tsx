import { IJogadores } from '../../interfaces/Interfaces'
import styles from './CardJogador.module.scss'

interface PropsCardJogador{
    jogador: IJogadores
}

type Numero = number | string

const CardJogador = ({jogador}:PropsCardJogador) => {
    function DefineNumero():Numero{
        if(jogador.number === null){
            return 'Sem Número'
        }
        else{
            return jogador.number
        }

    }
    return(
        <div className={styles.CardJogador}>
            <img src={jogador.photo} alt="Foto do jogador" />
            <h2>{jogador.name}</h2>
            <p>Idade: {jogador.age}</p>
            <p>Nacionalidade: {jogador.nationality}</p>
            <p>Posição: {jogador.position}</p>
            <p>Camisa: {DefineNumero()}</p>
        </div>
    )
}

export default CardJogador