import React, { useState, useEffect } from 'react';
import DataFrame from 'dataframe-js';

import './Home.css';
import Pc from '../../components/pc/Pc';
import ProcessData from '../../utils/ProcessData';
import DetailsView from '../../components/detailsView/DetailsView';

export default function Home(props) {
    const [ fullData, setFullData] = useState(null);
    const [data, setData] = useState(null);
    const [ w, setW ] = useState([true,true,true,true]);
    const [ sex, setSex ] = useState([true,true]);
    const [ continent, setContinent ] = useState(false);
    const [ bNames, setBNames ] = useState(['button', 'button', 'button', 'button']); 
    const [ sNames, setSNames ] = useState(['button', 'button']); 
    const [ cNames, setCNames ] = useState(['button', 'button pressed']);
    const [onDisplay, setOnDisplay] = useState([]);
    const [selectedC, setSelectedC] = useState({});

    useEffect(() => {
        async function getData() {
            const df = await DataFrame.fromCSV('data/allAverages.csv');
            const processed = ProcessData(df, [true,true,true,true,true,true,false]);
            setData(processed);
            setFullData(df);
        }
        getData();
    }, [])

    const bW = (stat) => {

        if( stat.findIndex( val => val === true) === -1)
            return;


        const filterD = ProcessData(fullData, [...stat,sex[0],sex[1],continent]);
        setData(filterD);
        setW(stat);

        let names = [];
        names.push(stat[0] ? 'button' : 'button pressed');
        names.push(stat[1] ? 'button' : 'button pressed');
        names.push(stat[2] ? 'button' : 'button pressed');
        names.push(stat[3] ? 'button' : 'button pressed');
        setBNames(names);
    }

    const bS = (stat) => {
        if( stat.findIndex( val => val === true) === -1)
            return;
        
        const filterD = ProcessData(fullData, [...w,stat[0],stat[1],continent]);
        setData(filterD);
        setSex(stat);
    
        let names = [];
        names.push(stat[0] ? 'button' : 'button pressed');
        names.push(stat[1] ? 'button' : 'button pressed');
        setSNames(names);
    }

    const bC = (val) => {
        const filterD = ProcessData(fullData, [...w,...sex,val]);
        setData(filterD);
        setContinent(val);

        const bNames = val ? ['button pressed', 'button'] : ['button', 'button pressed'];
        setCNames(bNames);
    }



    return (
        <React.Fragment>

            <Pc {...props} data={data} setOnDisplay={setOnDisplay} setSelectedC={setSelectedC}></Pc>
            <div className='belowPC'>
                <div className="dataControls">
                    <div className='continentContainer'>
                        <button className={cNames[0]} onClick={() => bC(false)}>Country View</button>
                        <button className={cNames[1]} onClick={() => bC(true)}>Continent View</button>
                    </div>
                    <div className='waveContainer'>
                        <button className={bNames[0]} onClick={() => bW([!w[0],w[1],w[2],w[3]])}>Wave 3</button>
                        <button className={bNames[1]} onClick={() => bW([w[0],!w[1],w[2],w[3]])}>Wave 4</button>
                        <button className={bNames[2]} onClick={() => bW([w[0],w[1],!w[2],w[3]])}>Wave 5</button>
                        <button className={bNames[3]} onClick={() => bW([w[0],w[1],w[2],!w[3]])}>Wave 6</button>
                    </div>
                    <div className='sexContainer'>
                        <button className={sNames[0]} onClick={() => bS([!sex[0],sex[1]])} >Male</button>
                        <button className={sNames[1]} onClick={() => bS([sex[0],!sex[1]])} >Female</button>
                    </div>
                </div>
                <div className='detailsView'>
                    <DetailsView data={onDisplay} selectedC={selectedC}></DetailsView>
                </div>
            </div>
        </React.Fragment>
    );
}