import React from 'react';
import { Link } from "react-router-dom";
import createTime from '../utils/utils';

const TableRow = (props) => {
    const { id, place, mag, date } = props;
    let earthquakeDate = createTime(date);

    return (
        <tr>
            <td>
                <Link to={`/earthquakedetail/${id}`}>
                    {place}
                </Link>
            </td>
            <td>{mag}</td>
            <td>{earthquakeDate}</td>
        </tr>
    );
}

export default TableRow;
