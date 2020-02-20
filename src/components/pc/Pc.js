import React, { useEffect, useRef, useState } from 'react';
import Parcoords from 'parcoord-es';
import * as d3 from 'd3';
import PCtable from '../pcTable/PCtable'
import './Pc.css';

export default function Pc(env) {
    const data = env.data;
    const chartRef = useRef(null);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        if (chartRef !== null && data) {
            const colorgen = d3.scaleOrdinal()
                .domain(data)
                .range(["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c",
                    "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00",
                    "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]);

            Parcoords()(chartRef.current)
                .data(data)
                .hideAxis(['Country Code'])
                .color(function (d) {
                    return colorgen(d['Country Name']);
                })
                .alpha(0.5)
                .margin({ top: 20, left: 50, bottom: 12, right: 50 })
                .mode("queue")
                .render()
                .reorderable()
                .brushMode("1D-axes")
                .on('brushend', brushed => setTableData(brushed)); 

            setTableData(data);
        }
    }, [chartRef, data]);


    return (
        <div>
            <div className='overViewContainer'>
                <div ref={chartRef} id={'chart-id'} style={{ width: 1000, height: 450 }} className={'parcoords'} />
                <div className='coordsTable'>
                    <PCtable data={tableData}></PCtable>
                </div>
            </div>
            <div className='parCoordsNav'>
                <div>
                    <button>Clear Brush</button>
                </div>
                <div>
                    <button>Wave 3</button>
                    <button>Wave 4</button>
                    <button>Wave 5</button>
                    <button>Wave 6</button>
                    <button>All</button>
                </div>
                <div>
                    <button>Continent View</button>
                </div>
                <div>
                    <button>Male</button>
                    <button>Female</button>
                    <button>Both</button>
                </div>
            </div>
        </div>
    )
}