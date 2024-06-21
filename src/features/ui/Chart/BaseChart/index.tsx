"use client";

import * as echarts from "echarts";

import React, { useRef } from "react";

import ReactEChartsCore from "echarts-for-react/lib/core";
import { updateIfNotExists } from "../updateIfNotExists";
import useSize from "@/utils/useSize";

export default function BaseChart({ option }: any) {
  // let echarts_instance = useRef(null)
  let target = useRef(null);
  // const domRect = useSize(target);

  const BaseChartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      type: "value",
    },
  };

  let opt = updateIfNotExists(structuredClone(option), BaseChartOption);

  return (
    <div className={"absolute inset-0"} ref={target}>
      <ReactEChartsCore
        // ref={echarts_instance}
        echarts={echarts}
        option={opt}
        // notMerge={true}
        // lazyUpdate={true}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
