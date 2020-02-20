import React from 'react';
import './PCtable.css';

export default function PCtable(props) {
    const { data } = props;

    const countries = data.map( obj => {
        return obj['Country Name'];
    }).sort();

    return (
        <div className='pcTableContainer'>
            <h4 className='pcTableTitle'>Countries</h4>
            <ul className='pcTable'>
                {countries && 
                    countries.map( country => <li key={country}>{country}</li>)
                }
            </ul>
        </div>
    )
}