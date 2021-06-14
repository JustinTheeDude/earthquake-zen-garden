import React from 'react';
import { Link } from "react-router-dom";
import createTime from '../utils/utils';

const TableRow = (props) => {
    const { id, place, mag, time } = props;
    let date = createTime(time);

    return (
        <tr>
            <td>
                <Link to={`/earthquakedetail/${id}`}>
                    {place}
                </Link>
            </td>
            <td>{mag}</td>
            <td>{date}</td>
        </tr>
    );
}

export default TableRow;
