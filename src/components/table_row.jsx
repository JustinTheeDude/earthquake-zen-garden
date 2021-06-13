import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

const TableRow = (props) => {
    let date = moment(props.date).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <tr>
            <td>
                <Link to={`/earthquakedetail/${props.id}`}>
                    {props.place}
                </Link>
            </td>
            <td>{props.mag}</td>
            <td>{date}</td>
        </tr>
    );
}

export default TableRow;
