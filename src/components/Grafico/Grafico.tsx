import { useContext } from "react";
import ReactApexChart from 'react-apexcharts';
import { AppContext } from "../../context/context";

const Grafico = () => {
    const {estatisticasDoTime} = useContext(AppContext)
    const series = [
        {
            name: "Gols",
            data: Object.values(estatisticasDoTime.golsPorMinuto)
        }
    ]

    const options = {
        chart: {
            type:'line' as const,
            foreColor: "#FFF"
        },
        xaxis: {categories: Object.keys(estatisticasDoTime.golsPorMinuto)},
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