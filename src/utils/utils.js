import moment from 'moment';

const createTime = (time) => {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a')
}

export default createTime;
