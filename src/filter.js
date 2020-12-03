import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', function (value) {
    if (value)
    {
        return moment(String(value)).format('MMM DD YYYY');
    }
});

Vue.filter('textFormat', function (value) {
    if (value)
    {
        return value.substring(0,200) + '...';
    }
});
