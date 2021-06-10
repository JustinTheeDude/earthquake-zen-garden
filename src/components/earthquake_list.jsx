import React, { useState } from 'react';
import TableRow from './table_row';
import data from '../earthquake_data/earthquakedata.json';

const EarthquakeList = () => {
    const { features, metadata } = data.data;
    const [ sortedData, setSortedData ] = useState([])
    const sortedFeaturesDescending = features.sort((a,b) => b.properties.mag - a.properties.mag);

    const sortData = () => {
        setSortedData(sortedFeaturesDescending);
    }

    console.log(sortedData)

    return (
        <div className="earthquake-list">
            <h2 className="earthquake-title">{metadata.title}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th onClick={sortData()}>Magnitude</th>
                        <th>Time</th>
                    </tr>
                </tbody>
                <tbody>
                    {sortedFeaturesDescending.map((feature, i) => {
                        return (
                            <TableRow  key={i}
                                place={feature.properties.place}
                                mag={feature.properties.mag}
                                date={feature.properties.time}
                                id={feature.id} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EarthquakeList;
