import React from 'react'
import data from '../earthquake_data/earthquakedata.json';

const EarthquakeList = () => {
    const { features } = data.data;

    const earthquakeList = features.map((feature, i) => {
            let date = new Date(feature.properties.time).toUTCString();
            console.log(date)
                return (
                    <tr key={i}>
                        <td>{feature.properties.place}</td>
                        <td>{feature.properties.mag}</td>
                        <td>{date}</td>
                    </tr>
                );
    });

    return (
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Magnitude</th>
                    <th>Time</th>
                </tr>
            </tbody>
            <tbody>
                {earthquakeList}
            </tbody>
        </table>
    );
}

export default EarthquakeList;
