export interface IUsuario{
    email: string;
    chave: string;
    requisicoes: {
        atual: number;
        limite: number;
    }
}

export interface IContext{
    usuarioLogado: IUsuario;
    setUsuarioLogado: (usuarioLogado:IUsuario) => void
}