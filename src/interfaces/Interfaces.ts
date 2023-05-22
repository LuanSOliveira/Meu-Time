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
    setUsuarioLogado: (usuarioLogado:IUsuario) => void;
    
    listaDePaises: IPaises[];
    setListaDePaises: (listaDePaises:IPaises[]) => void;
    listaDeTemporadas: number[];
    setListaDeTemporadas: (listaDeTemporadas:number[]) => void;
    listaDeLigas: ILigas[];
    setListaDeLigas: (listaDeLigas:ILigas[]) => void;
    listaDeTimes: ITimes[];
    setListaDeTimes: (listaDeTimes:ITimes[]) => void

    paisSelecionado: IPaises;
    setPaisSelecionado: (paisSelecionado:IPaises) => void;
    temporadaSelecionada: number;
    setTemporadaSelecionada: (temporadaSelecionada:number) => void;
    ligaSelecionada: ILigas;
    setLigaSelecionada: (ligaSelecionada:ILigas) => void;
    timeSelecionado: ITimes;
    setTimeSelecionado: (timeSelecionado:ITimes) => void;

    estatisticasDoTime: IEstatisticas;
    setEstatisticasDoTime: (estatisticasDoTime: IEstatisticas) => void;
}

export interface IPaises {
    name: string,
    code: string,
    flag: string
}

export interface ILigas {
    id: number,
    name: string,
    type: string,
    logo: string,
    country: IPaises,
    seasons: number[]
}

export interface ITimes {
    id: number,
    name: string,
    code: string,
    country: string,
    logo: string
}

export interface IJogadores {
    id: number,
    name: string,
    age: number,
    nationality: string,
    photo: string,
    position: string,
    number: number | null,
}

export interface IEstatisticas {
    jogos: number,
    vitorias: number,
    empates: number,
    derrotas: number,
    gols: number,
    golsPorMinuto: {
        "0-15": number | null,
        "16-30": number | null,
        "31-45": number | null,
        "46-60": number | null,
        "61-75": number | null,
        "76-90": number | null,
        "91-105": number | null,
        "106-120": number | null
    },
    formacao: string,
    jogadores: IJogadores[]
}