import {http} from "../../../apiServices/http_services";

export const get_user = ({commit}) => {
    return http().get('/users').then((response) => {
        commit('SET_USERS', response.data.users);
    });
};

export const get_role = ({commit}) => {
    return http().get('/users/get_role').then((response) => {
        commit('SET_ROLES', response.data.roles);
    });
};

export const add_user = ({commit}, data) => {
    return http().post('/users/store', data).then((response) => {
        commit('ADD_USER', response.data);
    });
};

export const edit_user = ({commit}, id) => {
    return http().get(`/users/edit/${id}`).then((response)=>{
        commit('EDIT_USER', response.data);
    });
};

export const update_user = ({commit}, {id, data}) => {
    return http().post(`/users/update/${id}`, data).then((response) => {
        commit('UPDATE_USER', response.data);
    });
};

export const change_password = ({commit}, {id, data}) => {
    return http().post(`/users/password_change/${id}`, data).then((response) => {
        commit('CHANGE_PASSWORD_USER', response.data);
    });
};



export const delete_user = ({commit}, id) => {
    return http().delete(`/users/destroy/${id}`).then((response) => {
        commit('DELETE_USER', response.data);
    });
};