import { IJogadores } from '../../interfaces/Interfaces'
import styles from './CardJogador.module.scss'

interface PropsCardJogador{
    jogador: IJogadores
}

const CardJogador = ({jogador}:PropsCardJogador) => {

    return(
        <div className={styles.CardJogador}>
            <img src={jogador.photo} alt="Foto do jogador" />
            <h2>{jogador.name}</h2>
            <p>Idade: {jogador.age}</p>
            <p>Nacionalidade: {jogador.nationality}</p>
            <p>Posição: {jogador.position}</p>
        </div>
    )
}

export default CardJogador