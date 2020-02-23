import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import RadarChart from '../../utils/RadarChart';
import './DetailsView.css';

export default function DetailsView(props) {
    const { data, selectedC } = props;
    const spiderRef = useRef(null);


    // Calc avrg
    const cleanData = (data) => {
        let famSum = 0;
        let friendSum = 0;
        let happSum = 0;
        let religSum = 0;
        let parentSum = 0;

        const count = data.length;

        for(let i=0; i<count; i++) {
            famSum += parseFloat(data[i]['Family importance']);
            friendSum += parseFloat(data[i]['Friend importance']);
            happSum += parseFloat(data[i]['Happiness']);
            religSum += parseFloat(data[i]['Religious']);
            parentSum += parseFloat(data[i]['Live with Parents']);
        }

        return [
            [
                { axis: 'Family Importance', value: famSum/count },
                { axis: 'Friend Importance', value: friendSum/count},
                { axis: 'Happiness', value: happSum/count},
                { axis: 'Religious', value: religSum/count},
                { axis: 'Live with Parents', value: parentSum/count},
            ]
        ];
    };

    const cleanSelected = (data) => {
        return [
            { axis: 'Family Importance', value: data['Family importance']},
            { axis: 'Friend Importance', value: data['Friend importance']},
            { axis: 'Happiness', value: data['Happiness']},
            { axis: 'Religious', value: data['Religious']},
            { axis: 'Live with Parents', value: data['Live with Parents']},
        ]
    };

    useEffect(() => {
        if (spiderRef !== null && data.length > 0) {
            const d = cleanData(data);
            const color = d3.scaleOrdinal()
                .domain(d)
                .range(["#EDC951", "#CC333F"]);

            d3.select('#spider-id').html(null);

            const margin = { top: 50, right: 50, bottom: 50, left: 50 },
                width = Math.min(300, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

            const radarChartOptions = {
                w: width,
                h: height,
                margin: margin,
                maxValue: 0.5,
                levels: 5,
                roundStrokes: true,
                color: color
            };

            if(Object.entries(selectedC).length !== 0 && selectedC.constructor === Object) {
                if(d.length === 1) {
                    d.push(cleanSelected(selectedC));
                }
                else 
                    d[1] = cleanSelected(selectedC);
            }

            RadarChart(".spiderChart", d, radarChartOptions)

        }
    }, [spiderRef, data, selectedC]);


    return (
        <div className='details'>
            <div className='spiderChartContainer'>
                <div ref={spiderRef} id={'spider-id'} className={'spiderChart'} />
            </div>
            <div className='listDetails'>

            </div>
        
        </div>
    )
}