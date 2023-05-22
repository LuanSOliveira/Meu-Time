import { useContext, useEffect } from 'react'
import styles from './BoxEstatisticas.module.scss'
import { AppContext } from '../../context/context'
import Grafico from '../Grafico/Grafico'
import CardJogador from '../CardJogador/CardJogador'
import { IEstatisticas, IJogadores } from '../../interfaces/Interfaces'

const BoxEstatisticas = () => {
    const {
        timeSelecionado, setTimeSelecionado, estatisticasDoTime, temporadaSelecionada,
        usuarioLogado, setEstatisticasDoTime, ligaSelecionada
    } = useContext(AppContext)

    function FecharEstatisticas():void{
        setTimeSelecionado({id: 0, name: "", code: "", country: "", logo: ""})
    }

    useEffect(() => {
        fetch(`https://v3.football.api-sports.io/teams/statistics?season=${temporadaSelecionada}&team=${timeSelecionado.id}&league=${ligaSelecionada.id}`,{
            "method": "GET",
            "headers": {"x-rapidapi-host": "v3.football.api-sports.io", "x-apisports-key": `${usuarioLogado.chave}`}
        })
        .then(response => response.json())
        .then((data) => {
            let estatisticaTime: IEstatisticas = {
                jogos: data.response.fixtures.played.total,
                vitorias: data.response.fixtures.wins.total,
                empates: data.response.fixtures.draws.total,
                derrotas: data.response.fixtures.loses.total,
                gols: data.response.goals.for.total.total,
                golsPorMinuto: {
                    "0-15": (data.response.goals.for.minute["0-15"].total === null)? 0 : data.response.goals.for.minute["0-15"].total,
                    "16-30": (data.response.goals.for.minute["16-30"].total === null)? 0 : data.response.goals.for.minute["16-30"].total,
                    "31-45": (data.response.goals.for.minute["31-45"].total === null)? 0 : data.response.goals.for.minute["31-45"].total,
                    "46-60": (data.response.goals.for.minute["46-60"].total === null)? 0 : data.response.goals.for.minute["46-60"].total,
                    "61-75": (data.response.goals.for.minute["61-75"].total === null)? 0 : data.response.goals.for.minute["61-75"].total,
                    "76-90": (data.response.goals.for.minute["76-90"].total === null)? 0 : data.response.goals.for.minute["76-90"].total,
                    "91-105": (data.response.goals.for.minute["91-105"].total === null)? 0 : data.response.goals.for.minute["91-105"].total,
                    "106-120": (data.response.goals.for.minute["106-120"].total === null)? 0 : data.response.goals.for.minute["106-120"].total
                },
                formacao: "",
                jogadores: []
            }
            let melhorFormacao = {formation: '', played: 0}

            data.response.lineups.map(
                (form: any) => {
                    if(form.played >= melhorFormacao.played){
                        melhorFormacao = form
                    }
                }
            )

            estatisticaTime.formacao = melhorFormacao.formation

            fetch(`https://v3.football.api-sports.io/players?season=${temporadaSelecionada}&team=${timeSelecionado.id}`,{
                "method": "GET",
                "headers": {"x-rapidapi-host": "v3.football.api-sports.io", "x-apisports-key": `${usuarioLogado.chave}`}
            })
            .then(response => response.json())
            .then((data) => {
                data.response.map(
                    (jogador: any) => {
                        let novoJogador: IJogadores = {
                            id: jogador.player.id,
                            name: jogador.player.name,
                            age: jogador.player.age,
                            nationality: jogador.player.nationality,
                            photo: jogador.player.photo,
                            position: jogador.statistics[0].games.position,
                            number: jogador.statistics[0].games.number,
                        }

                        estatisticaTime.jogadores.push(novoJogador)
                    }
                    )
                setEstatisticasDoTime(estatisticaTime)
            })
            
        })
    },[])

    return(
        <div className={styles.BoxEstatisticas}>
            <div className={styles.SubBoxEstatisticas} data-aos="fade-up">
                <section className={styles.SecVoltar}>
                    <button onClick={FecharEstatisticas}>Voltar</button>
                </section>
                <section className={styles.SecInfoTime}>
                    <img src={timeSelecionado.logo} alt="Logotipo do Time" />
                    <div className={styles.Estatisticas}>
                        <h2>{timeSelecionado.name}</h2>
                        <p>Total de Jogos: {estatisticasDoTime.jogos}</p>
                        <p>Vitórias: {estatisticasDoTime.vitorias}</p>
                        <p>Empates: {estatisticasDoTime.empates}</p>
                        <p>Derrotas: {estatisticasDoTime.derrotas}</p>
                        <p>Total de Gols: {estatisticasDoTime.gols}</p>
                        <p>Principal Formação: {estatisticasDoTime.formacao}</p>
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
                             estatisticasDoTime.jogadores.map(
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