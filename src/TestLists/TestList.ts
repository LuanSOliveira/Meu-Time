import { IEstatisticas, ILigas, IPaises, ITimes } from "../interfaces/Interfaces"

export const listaPaises: IPaises[] = [
    {
        name: "England",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg"
    },
    {
        name: "England2",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg"
    },
    {
        name: "England3",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg"
    },
    {
        name: "England4",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg"
    },
    {
        name: "England5",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg"
    },
    {
        name: "England6",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg"
    },
]

export const listaTemporadas: number[] = [2008, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]

export const listaLigas: ILigas[] = [
    {
        id: 39,
        name: "Premier League",
        type: "League",
        logo: "https://media.api-sports.io/football/leagues/39.png",
        country: {
            "name": "England",
            "code": "GB",
            "flag": "https://media.api-sports.io/flags/gb.svg"
        },
        seasons : [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    },
    {
        id: 40,
        name: "Championship",
        type: "League",
        logo: "https://media-2.api-sports.io/football/leagues/40.png",
        country: {
            "name": "England",
            "code": "GB",
            "flag": "https://media.api-sports.io/flags/gb.svg"
        },
        seasons : [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    },
    {
        id: 46,
        name: "EFL Trophy",
        type: "Cup",
        logo: "https://media-2.api-sports.io/football/leagues/46.png",
        country: {
            "name": "England",
            "code": "GB",
            "flag": "https://media.api-sports.io/flags/gb.svg"
        },
        seasons : [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    },
]

export const listaTimesDaLiga: ITimes[] = [
    {
        id: 33,
        name: "Manchester United",
        code: "MUN",
        country: "England",
        logo: "https://media.api-sports.io/football/teams/33.png"
    },
    {
        id: 34,
        name: "Newcastle",
        code: "NEW",
        country: "England",
        logo: "https://media.api-sports.io/football/teams/34.png"
    },
    {
        id: 35,
        name: "Newcastle",
        code: "NEW",
        country: "England",
        logo: "https://media.api-sports.io/football/teams/34.png"
    },
    {
        id: 36,
        name: "Newcastle",
        code: "NEW",
        country: "England",
        logo: "https://media.api-sports.io/football/teams/34.png"
    },
    {
        id: 37,
        name: "Newcastle",
        code: "NEW",
        country: "England",
        logo: "https://media.api-sports.io/football/teams/34.png"
    },
]

export const estatisticasTime: IEstatisticas = {
    jogos: 38,
    vitorias: 18,
    empates: 12,
    derrotas: 8,
    gols: 66,
    golsPorMinuto: {
        "0-15": 4,
        "16-30": 17,
        "31-45": 11,
        "46-60": 13,
        "61-75": 10,
        "76-90": 8,
        "91-105": 3,
        "106-120": null
    },
    formacao: "4-2-3-1",
    jogadores: [
        {
            id: 882,
            name: "David de Gea asdasd da",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: null,
        },
        {
            id: 883,
            name: "David de Gea",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: 1,
        },
        {
            id: 884,
            name: "David de Gea",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: 2,
        },
        {
            id: 885,
            name: "David de Gea",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: 3,
        },
        {
            id: 886,
            name: "David de Gea",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: 3,
        },
        {
            id: 887,
            name: "David de Gea",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: 3,
        },
        {
            id: 888,
            name: "David de Gea",
            age: 33,
            nationality: "Spain",
            photo: "https://media-3.api-sports.io/football/players/882.png",
            position: "Goalkeeper",
            number: 3,
        },
    ]
}