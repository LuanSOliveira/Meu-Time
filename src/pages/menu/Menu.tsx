import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context'
import styles from './Menu.module.scss'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import BoxInfoConta from '../../components/BoxInfoConta/BoxInfoConta';
import BoxInfoPesquisa from '../../components/BoxInfoPesquisa/BoxInfoPesquisa';
import BoxListaPaises from '../../components/BoxListaPaises/BoxListaPaises';
import BoxListaTemporadas from '../../components/BoxListaTemporadas/BoxListaTemporadas';
import BoxListaLigas from '../../components/BoxListaLigas/BoxListaLigas';
import BoxListaTimes from '../../components/BoxListaTimes/BoxListaTimes';
import BoxEstatisticas from '../../components/BoxEstatisticas/BoxEstatisticas';
import { ILigas } from '../../interfaces/Interfaces';

const Menu = () => {
    const {usuarioLogado, paisSelecionado, temporadaSelecionada, ligaSelecionada,
           listaDeTimes, timeSelecionado, setListaDePaises, setListaDeTemporadas,
           setListaDeLigas
    } = useContext(AppContext)

    const navegar: NavigateFunction = useNavigate()

    //Consome uma requisição para a API
    function ConsultaPaises():void{
        fetch("https://v3.football.api-sports.io/countries",{
            "method": "GET",
            "headers": {"x-rapidapi-host": "v3.football.api-sports.io", "x-apisports-key": `${usuarioLogado.chave}`}
        })
        .then(response => response.json())
        .then((data) =>{
            setListaDePaises(data.response)
        })
    }

    //Consome uma requisição para a API
    function ConsultaTemporadas():void{
        fetch("https://v3.football.api-sports.io/leagues/seasons",{
            "method": "GET",
            "headers": {"x-rapidapi-host": "v3.football.api-sports.io", "x-apisports-key": `${usuarioLogado.chave}`}
        })
        .then(response => response.json())
        .then((data) =>{
            setListaDeTemporadas(data.response)
        })
    }

    //Consome uma requisição para a API
    function ConsultaLigas():void{
        fetch("https://v3.football.api-sports.io/leagues",{
            "method": "GET",
            "headers": {"x-rapidapi-host": "v3.football.api-sports.io", "x-apisports-key": `${usuarioLogado.chave}`}
        })
        .then(response => response.json())
        .then((data) =>{
            let listaLigas: ILigas[] = []
            
            data.response.map(
                (dataLiga: any) => {
                    let liga: ILigas = {
                        id: dataLiga.league.id, 
                        name: dataLiga.league.name, 
                        type: dataLiga.league.type, 
                        logo: dataLiga.league.logo, 
                        country: {"name": dataLiga.country.name, "code": dataLiga.country.code, "flag": dataLiga.country.flag}, 
                        seasons : []
                    }
                    dataLiga.seasons.map(
                        (temporada: any) => {
                            liga.seasons.push(temporada.year)
                        }
                    )
                    listaLigas.push(liga)
                }
            )
            setListaDeLigas(listaLigas)
        })
    }

    useEffect(() => {
        if(usuarioLogado.email === ''){
            navegar('/')
        }
        else{
            ConsultaPaises()
            ConsultaTemporadas()
            ConsultaLigas()
        }
    },[])

    return(
        <div className={styles.Menu}>
            <div className={styles.SubBoxMenu}>
                <BoxInfoConta/>
                <BoxInfoPesquisa/>
                {
                    (!paisSelecionado.name) && <BoxListaPaises/>
                }
                {
                    (paisSelecionado.name && !temporadaSelecionada) && <BoxListaTemporadas/>
                }
                {
                    (temporadaSelecionada && !ligaSelecionada.name) && <BoxListaLigas/>
                }
                {
                    (listaDeTimes.length > 0 && timeSelecionado.id === 0) && <BoxListaTimes/>
                }
                {
                    (timeSelecionado.id > 0) && <BoxEstatisticas/>
                }
            </div>
        </div>
    )
}

export default Menu