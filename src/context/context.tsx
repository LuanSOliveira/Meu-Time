import { createContext, ReactNode, useState } from "react";
import { IContext, ITimes } from "../interfaces/Interfaces";
import { listaLigas, listaPaises, listaTemporadas } from "../TestLists/TestList";

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
    setTimeSelecionado: () => {}
}

export const AppContext =createContext<IContext>(initialState)

interface AppProviderProps{
    children: ReactNode
}

const AppProvider = ({children}:AppProviderProps) => {
    const [usuarioLogado, setUsuarioLogado] = useState({email : '', chave: '', requisicoes: {atual : 0, limite : 0}})

    const [listaDePaises, setListaDePaises] = useState(listaPaises)
    const [listaDeTemporadas, setListaDeTemporadas] = useState(listaTemporadas)
    const [listaDeLigas, setListaDeLigas] = useState(listaLigas)
    const [listaDeTimes, setListaDeTimes] = useState<ITimes[]>([])

    const [paisSelecionado, setPaisSelecionado] = useState({name: '', code: '', flag: ''})
    const [temporadaSelecionada, setTemporadaSelecionada] = useState(0)
    const [ligaSelecionada, setLigaSelecionada] = useState({id: 0, name: "", type: "", logo: "", country: {"name": "", "code": "", "flag": ""}, seasons : [0]})
    const [timeSelecionado, setTimeSelecionado] = useState({id: 0, name: "", code: "", country: "", logo: ""})

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
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider