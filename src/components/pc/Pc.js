import React from 'react';
import { ParallelCoordinates } from '../../../node_modules/react-parcoords';
import './Pc.css';
import * as d3 from "d3";



export default function Pc(env) {
    const data = env.data;

    const countries = ['Argentina', 'Australia', 'Brazil', 'Chile', 'China', 'Colombia', 'Germany', 'Ghana', 'India',
        'Iraq', 'Japan', 'Kazakstan', 'Malaysia', 'Morocco', 'Netherlands', 'New-Zealand', 'Nigeria',
        'Pakistan', 'Peru', 'Poland', 'Russia', 'South-Africa', 'Zimbabwe', 'Spain', 'Sweden', 'Thailand',
        'Egypt', 'USA', 'Uruguay', 'Uzbekistan'];

    const color = d3.scaleOrdinal()
        .domain(countries)
        .range(["#DB7F85", "#50AB84", "#4C6C86", "#C47DCB", "#B59248", "#DD6CA7", "#E15E5A", "#5DA5B3", "#725D82", "#54AF52", "#954D56", "#8C92E8", "#D8597D", "#AB9C27", "#D67D4B", "#D58323", "#BA89AD", "#357468", "#8F86C2", "#7D9E33", "#517C3F", "#9D5130", "#5E9ACF", "#776327", "#944F7E"]);


    const dimensions = {
        'Country Name': {
            title: "Name",
            type: 'string',

        },
        'Family importance': {
            title: "Family",
            type: 'number'
        },
        'Friend importance': {
            title: "Friends",
            type: 'number'
        },
        Happiness: {
            title: "Happiness",
            type: 'number',
        },
        'Life satisfaction': {
            title: "Satisfaction",
            type: 'number',
        },
        Religious: {
            title: "Religous",
            type: 'number'
        },
        'Suicide justifiability': {
            title: "Suicide",
            type: 'number'
        },
        'Employment status': {
            title: "Employment",
            type: 'number'
        },
        age: {
            title: "Age",
            type: 'number'
        },
        'Level of Education': {
            title: "Education",
            type: 'number'
        },
        'Live with Parents': {
            title: "Parents",
            type: 'number'
        }
    };


    const props = {
        color: 'green',
        width: 800,
        height: 400,
        dimensions,
        data: data,
        highlights: [],
        onBrush: console.log,
        onBrushEnd: console.log,
        onLineHover: console.log,
        onLinesHover: console.log
    };

    return (
        <div className='ParCoords'>
            {data && <ParallelCoordinates {...props} />}
        </div>
    )
}