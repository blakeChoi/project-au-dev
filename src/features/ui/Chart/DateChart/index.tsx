"use client";

import LineChartBase from "../BaseLine";

export function DateChart(props: any) {
  const DateChartOptions = {
    backgroundColor: "#f5f6f8",
    textStyle: {
      fontSize: 18,
    },
    tooltip: {
      textStyle: {
        fontSize: 14,
      },
    },
    legend: {},
    grid: {
      right: 40,
      bottom: 40,
    },
    xAxis: {
      data: ["CAM 1", "CAM 2", "CAM 3", "CAM 4", "CAM 5", "CAM 6"],
    },
    yAxis: [
      {
        name: "Weight(g)",
        nameLocation: "start",
        alignTicks: true,
        type: "value",
        max: 250,
      },
      {
        name: "Camera Number",
        nameLocation: "start",
        nameGap: 20,
        alignTicks: true,
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        name: "Weight",
        smooth: true,
        data: [70, 100, 120, 140, 150, 170],
        color: "#1DBF85",
        yAxisIndex: 0,
      },
      {
        type: "line",
        name: "LAI",
        smooth: true,
        data: [1200.2, 1212.4, 1562.0, 1322.1, 1122.3, 982.5],
        yAxisIndex: 1,
      },
    ],
  };

  return <LineChartBase title={props.title} option={DateChartOptions} />;
}
