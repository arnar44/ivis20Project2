import React from 'react';
import './PCtable.css';

export default function PCtable(props) {
    const { data, setSelectedC } = props;
    
    const countries = data.map( obj => {
        return obj['Country Name'];
    }).sort();

    const selected = (country) => {
        for(let i=0; i<data.length; i++) {
            if (data[i]['Country Name'] === country) {
                setSelectedC(data[i]);
                return;
            }
        }
    }

    return (
        <div className='pcTableContainer'>
            <h4 className='pcTableTitle'>Being Displayed:</h4>
            <ul className='pcTable'>
                {countries && 
                    countries.map( country => {
                        return (
                            <li key={country} onClick={e => selected(e.currentTarget.dataset.id)} data-id={country}>{country}</li>
                        )
                })
                }
            </ul>
        </div>
    )
}