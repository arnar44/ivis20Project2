import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

import RadarChart from '../../utils/RadarChart';
import './DetailsView.css';

export default function DetailsView(props) {
    const { data, selectedC } = props;
    const spiderRef = useRef(null);
    const [details, setDetails ] = useState([[],[]]);


    // Calc avrg
    const cleanData = (data) => {
        let famSum = 0;
        let friendSum = 0;
        let happSum = 0;
        let religSum = 0;
        let parentSum = 0;
        let lifesatSum = 0;
        let suiSum = 0;
        let emplSum = 0;
        let ageSum = 0;
        let eduSum = 0;

        const count = data.length;

        for(let i=0; i<count; i++) {
            famSum += parseFloat(data[i]['Family importance']);
            friendSum += parseFloat(data[i]['Friend importance']);
            happSum += parseFloat(data[i]['Happiness']);
            religSum += parseFloat(data[i]['Religious']);
            parentSum += parseFloat(data[i]['Live with Parents']);

            lifesatSum += parseFloat(data[i]['Life satisfaction']);
            suiSum += parseFloat(data[i]['Suicide justifiability']);
            emplSum += parseFloat(data[i]['Employment status']);
            ageSum += parseFloat(data[i]['age']);
            eduSum += parseFloat(data[i]['Level of Education']);
        }

        return [
            [
                { axis: 'Family Importance', value: famSum/count },
                { axis: 'Friend Importance', value: friendSum/count},
                { axis: 'Happiness', value: happSum/count},
                { axis: 'Religious', value: religSum/count},
                { axis: 'Live with Parents', value: parentSum/count},
            ],
            [
                lifesatSum/count, suiSum/count, emplSum/count, ageSum/count, eduSum/count
            ]
        ];
    };

    const cleanSelected = (data) => {
        return [
                [
                    { axis: 'Family Importance', value: data['Family importance']},
                    { axis: 'Friend Importance', value: data['Friend importance']},
                    { axis: 'Happiness', value: data['Happiness']},
                    { axis: 'Religious', value: data['Religious']},
                    { axis: 'Live with Parents', value: data['Live with Parents']},
                ],
                [
                    data['Life satisfaction'], data['Suicide justifiability'], data['Employment status'], data['age'], data['Level of Education']
                ]
            ]
    };

    useEffect(() => {
        if (spiderRef !== null && data.length > 0) {
            const allD = cleanData(data);
            const d = [allD[0]];
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

            let dets = [allD[1],[]];

            if(Object.entries(selectedC).length !== 0 && selectedC.constructor === Object) {
                const tmp = cleanSelected(selectedC);
                if(d.length === 1) {
                    d.push(tmp[0]);
                }
                else {
                    d[1] = tmp[0];
                }
                dets[1] = tmp[1];
            }
            
            setDetails(dets);
            RadarChart(".spiderChart", d, radarChartOptions)

        }
    }, [spiderRef, data, selectedC]);

    return (
        <div className='details'>
            <div className='spiderChartContainer'>
                <div ref={spiderRef} id={'spider-id'} className={'spiderChart'} />
            </div>
            <div className='listDetails'>
                <table className='detailsTable'>
                    <thead>
                        <tr>
                            <th>Line Description</th>
                            <th>Avrg of data on Display</th>
                            <th>Values of selected country/continent</th>
                        </tr>
                    </thead>
                    { details[0].length !== 0 &&
                        <tbody>
                            <tr>
                                <td>Life Satisfaction</td>
                                <td>{Number(details[0][0].toFixed(3))}</td>
                                <td>{details[1][0] > 0 && Number(details[1][0]).toFixed(3)}</td>
                            </tr>
                            <tr>
                                <td>Suicide justifiability</td>
                                <td>{Number(details[0][1].toFixed(3))}</td>
                                <td>{details[1].length !== 0 && Number(details[1][1]).toFixed(3)}</td>
                            </tr>
                            <tr>
                                <td>Employment Status</td>
                                <td>{Number(details[0][2].toFixed(3))}</td>
                                <td>{details[1].length !== 0 && Number(details[1][2]).toFixed(3)}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{Number(details[0][3].toFixed(3))}</td>
                                <td>{details[1].length !== 0 && Number(details[1][3]).toFixed(3)}</td>
                            </tr>
                            <tr>
                                <td>Level of Education</td>
                                <td>{Number(details[0][4].toFixed(3))}</td>
                                <td>{details[1].length !== 0 && Number(details[1][4]).toFixed(3)}</td>
                            </tr>
                            
                        </tbody>
                    }
                </table>
            </div>
        
        </div>
    )
}