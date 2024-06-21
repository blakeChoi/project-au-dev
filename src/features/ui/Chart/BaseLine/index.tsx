"use client";

import CroftEChartBase from "../BaseChart";
import { updateIfNotExists } from "../updateIfNotExists";

export default function BaseLine({ option, title }: any) {
  const BaseLineOption = {
    grid: {
      // 다른 설정을 유지하면서 bottom만 조정
      bottom: "30", // 필요에 따라 이 값을 조정
      top: "20",
      left: "40",
      right: "10",
    },
    // title: {
    //     top: '5%',
    //     left: '2%',
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      // formatter: (params) => {
      //     return `${params[0].name}<br/>${ChartName}: ${params[0].value} ${unit}`;
      // },
    },
    xAxis: {
      type: "category",
      axisLabel: {
        // fontSize: 10, // 폰트 크기 조정
      },
    },
    //   yAxis: [
    //     {
    //       type: "value",
    //       nameLocation: "start",
    //       nameGap: 20,
    //     },
    //   ],
    //   series: [
    //     {
    //       type: "line",
    //       smooth: true,
    //       markArea: {
    //         itemStyle: {
    //           color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
    //         },
    //       },
    //     },
    //   ],
  };

  let opt = updateIfNotExists(structuredClone(option), BaseLineOption);

  return (
    <div className="relative flex flex-col items-center w-full h-full p-4 bg-white rounded">
      <h1>{title}</h1>
      <CroftEChartBase option={opt} />
    </div>
  );
}
