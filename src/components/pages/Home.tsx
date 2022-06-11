import { memo } from "react";
import BarCharts from "./BarCharts";
import  LineCharts  from "./LineCharts";
import Sample from "./Sample";

export const Home = memo(() => {
    return (
        <>
        <div>Homeページです</div>
        <LineCharts />
        <BarCharts />
        <Sample />
        </>
        
    )
})