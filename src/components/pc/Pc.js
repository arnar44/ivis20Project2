import React, { useEffect, useRef, useState } from 'react';
import Parcoords from 'parcoord-es';
import * as d3 from 'd3';
import PCtable from '../pcTable/PCtable'
import './Pc.css';

export default function Pc(env) {
    const { data, setOnDisplay, setSelectedC } = env;
    const chartRef = useRef(null);
    const [tableData, setTableData] = useState([]);
    const pC = useRef(null);

    useEffect(() => {
        if (chartRef !== null && data) {
            const colorgen = d3.scaleOrdinal()
                .domain(data)
                .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c",
                    "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00",
                    "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]);

            d3.select('#chart-id').html(null);

            pC.current = Parcoords()(chartRef.current).data(data)
                .hideAxis(['Case','Country Code','Continent'])
                .color(function (d) {
                    return colorgen(d['Country Name']);
                })
                .alpha(0.5)
                .margin({ top: 20, left: 50, bottom: 12, right: 50 })
                .mode("queue")
                .render()
                .reorderable()
                .brushMode("1D-axes")
                .on('brushend', brushed => setTableData(brushed))
                .on('brushend', (brushed) => {
                    setTableData(brushed);
                    setOnDisplay(brushed);
                }); 
            
            setTableData(data);
            setOnDisplay(data);
        }
    }, [chartRef, data, setOnDisplay]);


    return (
        <div>
            <div className='overViewContainer'>
                <div ref={chartRef} id={'chart-id'} style={{ width: 1000, height: 400 }} className={'parcoords'} />
                <div className='coordsTable'>
                    <PCtable data={tableData} setSelectedC={setSelectedC}></PCtable>
                </div>
            </div>
            <div className='resetter'>
                <button className='resetBrushButton' onClick={() => pC.current.brushReset()}>Clear Brush</button>
            </div>
        </div>
    )
}