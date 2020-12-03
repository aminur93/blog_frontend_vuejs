import {http} from "../../../apiServices/http_services";

export const get_role = ({commit}) => {
    return http().get('/roles').then((response) => {
        commit("SET_ROLE", response.data.roles);
    });
};

export const add_role = ({commit}, data) => {
    return http().post('/roles/store', data).then((response) => {
        commit('ADD_ROLE', response.data);
    });
};