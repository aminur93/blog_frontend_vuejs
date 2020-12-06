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

export const edit_role = ({commit}, id) => {
    return http().get(`/roles/edit/${id}`).then((response)=> {
        commit('EDIT_ROLE', response.data);
    });
};

export const update_role = ({commit}, {id, data}) => {
    return http().post(`/roles/update/${id}`, data).then((response) => {
        commit('UPDATE_ROLE', response.data);
    });
};

export const delete_role = ({commit}, id) => {
    return http().delete(`/roles/destroy/${id}`).then((response) => {
        commit('DELETE_ROLE', response.data);
    });
};