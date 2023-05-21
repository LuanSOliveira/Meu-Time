import { useContext } from 'react'
import styles from './BoxEstatisticas.module.scss'
import { AppContext } from '../../context/context'
import { estatisticasTime } from '../../TestLists/TestList'
import Grafico from '../Grafico/Grafico'
import CardJogador from '../CardJogador/CardJogador'

const BoxEstatisticas = () => {
    const {timeSelecionado, setTimeSelecionado} = useContext(AppContext)

    function FecharEstatisticas():void{
        setTimeSelecionado({id: 0, name: "", code: "", country: "", logo: ""})
    }

    return(
        <div className={styles.BoxEstatisticas}>
            <div className={styles.SubBoxEstatisticas}>
                <section className={styles.SecVoltar}>
                    <button onClick={FecharEstatisticas}>Voltar</button>
                </section>
                <section className={styles.SecInfoTime}>
                    <img src={timeSelecionado.logo} alt="Logotipo do Time" />
                    <div className={styles.Estatisticas}>
                        <h2>{timeSelecionado.name}</h2>
                        <p>Total de Jogos: {estatisticasTime.jogos}</p>
                        <p>Vitórias: {estatisticasTime.vitorias}</p>
                        <p>Empates: {estatisticasTime.empates}</p>
                        <p>Derrotas: {estatisticasTime.derrotas}</p>
                        <p>Total de Gols: {estatisticasTime.gols}</p>
                        <p>Principal Formação: {estatisticasTime.formacao}</p>
                    </div>
                </section>
                <section className={styles.Grafico}>
                    <h3>Quantidade de gols/tempo de jogo:</h3>
                    <Grafico/>
                </section>
                <section className={styles.ListaJogadores}>
                    <h3>Lista de Jogadores:</h3>
                    <div className={styles.BoxCardsJogadores}>
                        {
                             estatisticasTime.jogadores.map(
                                (jogador) => <CardJogador key={jogador.id} jogador={jogador}/>
                            )
                        }
                    </div>
                </section>
            </div>

        </div>
    )
}

export default BoxEstatisticas