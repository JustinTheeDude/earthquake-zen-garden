import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../earthquake_data/earthquakedata.json';
import moment from 'moment';

const EarthquakeDetail = () => {
    let { id } = useParams();
    const { features } = data.data;
    const singleEarthquakeObject = features.find(feature => feature.id == id);
    let date = moment(singleEarthquakeObject.properties.time).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <div className="earthquake-list">
            <h2 className="heading">{singleEarthquakeObject.properties.title}</h2>
            <table className="earthquake-detail-table">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>{singleEarthquakeObject.properties.title}</td>
                    </tr>
                    <tr>
                        <th>Magnitude</th>
                        <td>{singleEarthquakeObject.properties.mag}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{singleEarthquakeObject.properties.status}</td>
                    </tr>
                    <tr>
                        <th>Tsunami</th>
                        <td>{singleEarthquakeObject.properties.tsunami}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{singleEarthquakeObject.properties.type}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EarthquakeDetail;
