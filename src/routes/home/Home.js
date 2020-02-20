import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

import './Home.css';
import Pc from '../../components/pc/Pc';

export default function Home(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
       async function getData() {
            const d = await d3.csv('/data/allTime_by_country.csv');
            setData(d);
       }
       getData();
    }, [])

    return (
        <React.Fragment>

            <div className="home">
                <p>Home Page</p>
            </div>
            <Pc {...props} data={data}></Pc>

        </React.Fragment>
    );
}