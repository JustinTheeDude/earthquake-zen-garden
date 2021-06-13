import React, { useState } from 'react';
import TableRow from './table_row';
import data from '../earthquake_data/earthquakedata.json';

const EarthquakeList = () => {
    const { features, metadata } = data.data;
    const sortedFeatures = [...features];
    const sortedByMag = sortedFeatures.sort((a, b) => b.properties.mag - a.properties.mag);
    const [ sortedFeature, setSortedFeature ] = useState(sortedByMag);
    const [ sortedBy, setSortedBy ] = useState("");
    const [ sortedField, setSortedField ] = useState("");


    const sortByFieldType = (type) => {
        let sortedField = [];

        if(sortedBy !== "desc") {
            sortedField = sortedFeatures.sort((a, b) => a.properties[type] - b.properties[type]);
            setSortedBy("desc");
        } else {
            sortedField = sortedFeatures.sort((a, b) => b.properties[type] - a.properties[type]);
            setSortedBy("asc");
        }

        setSortedFeature([...sortedField]);
        setSortedField(type)
    }

    const sortByPlace = () => {
        let sortedPlace = [];

        if(sortedBy !== "desc") {
            sortedPlace = sortedFeature.sort((a, b) => a.properties.place.split("k")[0] - b.properties.place.split("k")[0]);
            setSortedBy("desc");
        } else {
            sortedPlace = sortedFeature.sort((a, b) => b.properties.place.split("k")[0] - a.properties.place.split("k")[0]);
            setSortedBy("asc");
        }

        setSortedFeature([...sortedPlace]);
        setSortedField("place");
    }


    return (
        <div className="earthquake-list">
            <h2 className="heading">{metadata.title}</h2>
            <table>
                <tbody>
                    <tr>
                        <th onClick={() => sortByPlace()} className={sortedField == "place" ? sortedBy : ""}>Title</th>
                        <th onClick={() => sortByFieldType("mag")} className={sortedField == "mag" ? sortedBy : ""}>Magnitude</th>
                        <th onClick={() => sortByFieldType("time")} className={sortedField == "time" ? sortedBy : ""}>Time</th>
                    </tr>
                </tbody>
                <tbody>
                    {sortedFeature.map(feature => <TableRow key={feature.id}
                                                            place={feature.properties.place}
                                                            mag={feature.properties.mag}
                                                            date={feature.properties.time}
                                                            id={feature.id} /> )}
                </tbody>
            </table>
        </div>
    );
}

export default EarthquakeList;
