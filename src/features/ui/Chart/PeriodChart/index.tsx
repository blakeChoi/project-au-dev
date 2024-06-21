"use client";

import BaseLine from "../BaseLine";
import React from "react";
import { getXAxisData } from "@/features/ui/Chart/PeriodChart/getPeriodChartXAxisData";
import useDateRangeStore from "@/features/globalState/zustand/useDateRangeStore";

interface PeriodChartProps {
  title?: string;
}

export function PeriodChart(props: PeriodChartProps) {
  const { range } = useDateRangeStore();

  const xAxisData = getXAxisData(range);

  const PeriodChartOptions = {
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
      data: xAxisData,
    },
    yAxis: [
      {
        name: "무게(g)",
        nameLocation: "start",
        alignTicks: true,
        type: "value",
        max: 250,
      },
      {
        name: "면적(cm2)",
        nameLocation: "start",
        nameGap: 20,
        alignTicks: true,
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        name: "Fresh Weight",
        smooth: true,
        data: [220, 240, 200, 210, 230, 250],
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

  return <BaseLine title={props.title} option={PeriodChartOptions} />;
}
