import { estatisticasTime } from "../../TestLists/TestList"
import ReactApexChart from 'react-apexcharts';

const Grafico = () => {
    const series = [
        {
            name: "Gols",
            data: Object.values(estatisticasTime.golsPorMinuto)
        }
    ]

    const options = {
        chart: {
            type:'line' as const,
            foreColor: "#FFF"
        },
        xaxis: {categories: Object.keys(estatisticasTime.golsPorMinuto)},
        toolbar: {tools: {download: false}},
        tooltip: {theme: 'dark'}
    }

    return(
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type='line'
                height={350}
            />
        </div>
    )
}

export default Grafico