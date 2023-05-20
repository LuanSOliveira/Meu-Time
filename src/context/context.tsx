import { createContext, ReactNode, useState } from "react";
import { IContext } from "../interfaces/Interfaces";

const initialState: IContext = {
    usuarioLogado: {email : '', chave: '', requisicoes: {atual : 0, limite : 0}},
    setUsuarioLogado : () => {}
}

export const AppContext =createContext<IContext>(initialState)

interface AppProviderProps{
    children: ReactNode
}

const AppProvider = ({children}:AppProviderProps) => {
    const [usuarioLogado, setUsuarioLogado] = useState({email : '', chave: '', requisicoes: {atual : 0, limite : 0}})

    return(
        <AppContext.Provider value={
            {
                usuarioLogado, setUsuarioLogado,
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider