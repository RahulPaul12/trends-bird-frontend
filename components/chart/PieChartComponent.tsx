import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts"

const PieChartComponent = ({ series, categories }: { series: number[]; categories: string[] }) => {
    const options: ApexOptions = {
        chart: {
            type: 'donut',
        },
        labels: categories,
        legend: {
            position: 'bottom',
            markers: {
                size: 12,
                shape: 'square',
            },
        },
        dataLabels: { enabled: false },
        stroke: { width: 1 },
    };

    return (
        <div style={{ width: 200, margin: 'auto' }} className="piechart">
            <ReactApexChart
                type="donut"
                series={series}
                options={options}
                width={200}
                height={200}
            />
        </div>
    );
};

export default PieChartComponent