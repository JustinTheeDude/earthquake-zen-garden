import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import moment from 'moment';

const TableRow = (props) => {
    let date = moment(props.date).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <Router>
            <tr>
                <td>
                    <Link to={`${props.id}/earthquakedetail`}>
                        {props.place}
                    </Link>
                </td>
                <td>{props.mag}</td>
                <td>{date}</td>
            </tr>
        </Router>
    );
}

export default TableRow;