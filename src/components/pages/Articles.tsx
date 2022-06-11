import { memo } from "react"
import  BarCharts  from "./BarCharts"
import Sample from "./Sample"

export const Articles = memo(() => {
    return (
        <>
        <div>記事ページ</div>
        <BarCharts />
        </>
        
    )
})