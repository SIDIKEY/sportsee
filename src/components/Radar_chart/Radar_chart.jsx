import React from "react";
import "./Radar_chart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Text,
  
} from "recharts";

export default function RadChart({ dataPerf }) {
  

  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
   

    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 15}
        x={x + (x - cx) / 15}
        fill="#FFFFFF"
        fontSize="0.75rem"
      >
        {payload.value}
      </Text>
    );
  }

  return (
    <div className="CustomRadar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="55%" data={dataPerf}>
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            strokeWidth={1}
            
            tickSize={0.1}
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            polarRadius={[0, 2, 8, 25, 40]}
          ></PolarGrid>

          <Radar
            name="performance"
            dataKey="value"
            stroke="red"
            fill="red"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
