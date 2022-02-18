import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const GraphDistrubution = ({ accounts }) => {
    const { checking, savings, brokerage } = accounts;
    const pieData = [
        {
            title: "Checking",
            key: "Checking",
            value: checking,
            color: "#e38627",
        },
        { title: "Savings", key: "Savings", value: savings, color: "#c13c37" },
        {
            title: "Brokerage",
            key: "Brokerage",
            value: brokerage,
            color: "#6a21f5",
        },
    ];
    //`${dataEntry.percentage.toFixed(2)}% \n${dataEntry.title}`
    const pieLabel = ({ x, y, dx, dy, dataEntry }) => (
        <g key={dataEntry.title}>
            <text
                x={x}
                y={y - 1.5}
                dx={dx}
                dy={dy}
                dominantBaseline="central"
                textAnchor="middle"
                style={{
                    fontSize: "3px",
                    fontFamily: "sans-serif",
                }}
            >
                {dataEntry.title}
            </text>
            <text
                x={x}
                y={y + 1.5}
                dx={dx}
                dy={dy}
                dominantBaseline="central"
                textAnchor="middle"
                style={{
                    fontSize: "3px",
                    fontFamily: "sans-serif",
                }}
            >
                {Math.round(dataEntry.percentage) + "%"}
            </text>
        </g>
    );

    return (
        <PieChart
            data={pieData}
            radius={25}
            animate={true}
            label={pieLabel}
            style={{ height: "450px" }}
        />
    );
};

export default GraphDistrubution;
