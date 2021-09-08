import moment from 'moment';

class DateService {
    isSame(compare, compareWith, compareBy = 'day') {
        return moment(compare).isSame(moment(compareWith), compareBy);
    }

    diffFromNow(timestamp) {
        return moment(timestamp).fromNow();
    }

    format(date, format = 'MMMM Do YYYY, h:mm:ss a') {
        return moment(date).format(format);
    }

    toDate(data = Date.now()) {
        return new Date(data);
    }

    get currentDate() {
        return moment();
    }
}

export const dateService = new DateService();
