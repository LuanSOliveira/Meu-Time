import { useContext } from 'react'
import styles from './BoxInfoPesquisa.module.scss'
import { AppContext } from '../../context/context'
import { ITimes } from '../../interfaces/Interfaces'

const BoxInfoPesquisa = () => {
    const {paisSelecionado, setPaisSelecionado,
           temporadaSelecionada, setTemporadaSelecionada,
           ligaSelecionada, setLigaSelecionada,
           setListaDeTimes, setTimeSelecionado,
           timeSelecionado, usuarioLogado
        } = useContext(AppContext)

    function AtivarBotaoPesquisar():boolean{
        if(paisSelecionado.name && temporadaSelecionada > 0 && ligaSelecionada.name && timeSelecionado.id === 0){
            return false
        }
        else{
            return true
        }
    }

    function LimparSelecao():void {
        setPaisSelecionado({name: '', code: '', flag: ''})
        setTemporadaSelecionada(0)
        setLigaSelecionada({id: 0, name: "", type: "", logo: "", country: {"name": "", "code": "", "flag": ""}, seasons : [0]})
        setListaDeTimes([])
        setTimeSelecionado({id: 0, name: "", code: "", country: "", logo: ""})
    }

    function PesquisarTimes():void{
        fetch(`https://v3.football.api-sports.io/teams?league=${ligaSelecionada.id}&season=${temporadaSelecionada}`,{
            "method": "GET",
            "headers": {"x-rapidapi-host": "v3.football.api-sports.io", "x-apisports-key": `${usuarioLogado.chave}`}
        })
        .then(response => response.json())
        .then((data) =>{
            let listaTimes: ITimes[] = []

            data.response.map(
                (timeLiga: any) =>{
                    let time: ITimes = {
                        id: timeLiga.team.id,
                        name: timeLiga.team.name,
                        code: timeLiga.team.code,
                        country: timeLiga.team.country,
                        logo: timeLiga.team.logo
                    }
                    listaTimes.push(time)
                }
            )
            setListaDeTimes(listaTimes)
        })
    }

    return(
        <div className={styles.BoxInfoPesquisa}>
            <div className={styles.SubBoxInfoPesquisa}>
                <div className={styles.BoxInfo}>
                    <div className={styles.InfoPais}>
                        <p>País: </p>
                        {
                            (paisSelecionado.name) &&
                            <>
                                <img src={paisSelecionado.flag} alt="Bandeira do país." />
                                <p>{paisSelecionado.name}</p>
                            </>
                        }
                    </div>
                    <div className={styles.InfoTemporada}>
                        <p>Temporada: </p>
                        {
                            (temporadaSelecionada > 0) && <p className={styles.Temporada}>{temporadaSelecionada}</p>
                        }
                    </div>
                    <div className={styles.InfoLiga}>
                        <p>Liga: </p>
                        {
                            (ligaSelecionada.name) &&
                            <>
                                <img src={ligaSelecionada.logo} alt="Logotipo da Liga." />
                                <p>{ligaSelecionada.name}</p>
                            </>
                        }
                    </div>
                    <button className={styles.LimparSelecao} onClick={LimparSelecao}>Limpar</button>
                </div>
                <button 
                    disabled={AtivarBotaoPesquisar()} 
                    className={styles.BotaoPesquisar}
                    onClick={PesquisarTimes}
                >
                    Pesqusiar Times
                </button>
            </div>

        </div>
    )
}

export default BoxInfoPesquisa