import React, { useState, useEffect } from 'react';
import DataFrame from 'dataframe-js';

import './Home.css';
import Pc from '../../components/pc/Pc';
import ProcessData from '../../utils/ProcessData';

export default function Home(props) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const df = await DataFrame.fromCSV('data/allAverages.csv');
            const processed = ProcessData(df, '1');
            setData(processed);
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