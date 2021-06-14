import React from 'react';
import { useParams } from 'react-router-dom';
import createTime from '../utils/utils';

const EarthquakeDetail = (props) => {
    const { id } = useParams();
    const { features } = props.earthquakedata;
    const singleEarthquakeObject = features.find(feature => feature.id == id);
    const { title, mag, status, tsunami, type, time } = singleEarthquakeObject.properties;
    const date = createTime(time);

    return (
        <div className="earthquake-list">
            <h2 className="heading">{title}</h2>
            <table className="earthquake-detail-table">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <th>Magnitude</th>
                        <td>{mag}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <th>Tsunami</th>
                        <td>{tsunami}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{type}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EarthquakeDetail;
