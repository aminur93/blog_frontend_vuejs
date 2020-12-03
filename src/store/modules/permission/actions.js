import {http} from "../../../apiServices/http_services";

export const get_permission = ({commit}) => {
    return http().get('/permission').then((response) => {
        commit('SET_PERMISSION', response.data.permissions);
    });
};

export const add_permission = ({commit}, data) => {
    return http().post('/permission/store', data).then((response) => {
        commit('ADD_PERMISSION', response.data);
    });
};

export const edit_permission = ({commit}, id) => {
    return http().get(`/permission/edit/${id}`).then((response) => {
        commit('EDIT_PERMISSION', response.data.edit_permission);
    });
};

export const update_permission = ({commit}, {id, data}) => {
    return http().post(`/permission/update/${id}`, data).then((response) => {
        commit('UPDATE_PERMISSION', response.data);
    });
};

export const delete_permission = ({commit}, id) => {
    commit('DELETE_PERMISSION', id);
    return http().delete(`/permission/destroy/${id}`);
};