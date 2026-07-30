'use client'
import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts"

const StackChartComponent = () => {
    const options = {
    chart: {
      type: 'bar',
      height: 120,
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 0, // no divider lines between segments
    },
    title: {
      text: 'Book Sales by Genre',
    },
    xaxis: {
      categories: ['Total'],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false, // removes background grid lines too
    },
    tooltip: {
      y: {
        formatter: (val: number | undefined) => val + 'K',
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  }

  const series = [
    { name: 'Fantasy', data: [263] },
    { name: 'Mystery', data: [258] },
    { name: 'Romance', data: [95] },
    { name: 'Sci-Fi', data: [48] },
    { name: 'Thriller', data: [147] },
  ]

    return (
        <ReactApexChart options={options as ApexOptions} series={series} type="bar" height={150} />
    )
}

export default StackChartComponent