import { createContext, ReactNode, useState } from "react";
import { IContext, IEstatisticas, ILigas, IPaises, ITimes } from "../interfaces/Interfaces";

const initialState: IContext = {
    usuarioLogado: {email : '', chave: '', requisicoes: {atual : 0, limite : 0}},
    setUsuarioLogado : () => {},

    listaDePaises: [],
    setListaDePaises: () => {},
    listaDeTemporadas: [],
    setListaDeTemporadas: () => {},
    listaDeLigas: [],
    setListaDeLigas: () => {},
    listaDeTimes: [],
    setListaDeTimes: () => {},

    paisSelecionado: {name: '', code: '', flag: ''},
    setPaisSelecionado: () => {},
    temporadaSelecionada: 0,
    setTemporadaSelecionada: () => {},
    ligaSelecionada: {id: 0, name: "", type: "", logo: "", country: {"name": "", "code": "", "flag": ""}, seasons : [0]},
    setLigaSelecionada: () => {},
    timeSelecionado: {id: 0, name: "", code: "", country: "", logo: ""},
    setTimeSelecionado: () => {},

    estatisticasDoTime: {
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols: 0,
        golsPorMinuto: {
            "0-15": 0,
            "16-30": 0,
            "31-45": 0,
            "46-60": 0,
            "61-75": 0,
            "76-90": 0,
            "91-105": 0,
            "106-120": 0
        },
        formacao: "",
        jogadores: []
    },
    setEstatisticasDoTime: () => {}
}

export const AppContext =createContext<IContext>(initialState)

interface AppProviderProps{
    children: ReactNode
}

const AppProvider = ({children}:AppProviderProps) => {
    const [usuarioLogado, setUsuarioLogado] = useState({email : '', chave: '', requisicoes: {atual : 0, limite : 0}})

    const [listaDePaises, setListaDePaises] = useState<IPaises[]>([])
    const [listaDeTemporadas, setListaDeTemporadas] = useState<number[]>([])
    const [listaDeLigas, setListaDeLigas] = useState<ILigas[]>([])
    const [listaDeTimes, setListaDeTimes] = useState<ITimes[]>([])

    const [paisSelecionado, setPaisSelecionado] = useState({name: '', code: '', flag: ''})
    const [temporadaSelecionada, setTemporadaSelecionada] = useState(0)
    const [ligaSelecionada, setLigaSelecionada] = useState({id: 0, name: "", type: "", logo: "", country: {"name": "", "code": "", "flag": ""}, seasons : [0]})
    const [timeSelecionado, setTimeSelecionado] = useState({id: 0, name: "", code: "", country: "", logo: ""})

    const [estatisticasDoTime, setEstatisticasDoTime] = useState<IEstatisticas>({
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols: 0,
        golsPorMinuto: {
            "0-15": 0,
            "16-30": 0,
            "31-45": 0,
            "46-60": 0,
            "61-75": 0,
            "76-90": 0,
            "91-105": 0,
            "106-120": 0
        },
        formacao: "",
        jogadores: []
    })

    return(
        <AppContext.Provider value={
            {
                usuarioLogado, setUsuarioLogado,
                listaDePaises, setListaDePaises,
                listaDeTemporadas, setListaDeTemporadas,
                listaDeLigas, setListaDeLigas,
                listaDeTimes, setListaDeTimes,
                paisSelecionado, setPaisSelecionado,
                temporadaSelecionada, setTemporadaSelecionada,
                ligaSelecionada, setLigaSelecionada,
                timeSelecionado, setTimeSelecionado,
                estatisticasDoTime, setEstatisticasDoTime,
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider