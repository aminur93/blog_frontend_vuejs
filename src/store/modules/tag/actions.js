import {http} from "../../../apiServices/http_services";

export const get_tag = ({commit}) => {
    return http().get('/tag').then((response) => {
        commit('SET_TAG', response.data.tags);
    });
};

export const add_tag = ({commit}, data) => {
    return http().post('/tag/store', data).then((response) => {
        commit('ADD_TAG', response.data);
    });
};

export const show_tag = ({commit}, id) => {
    return http().get(`/tag/edit/${id}`).then((response) => {
        commit('SHOW_TAG', response.data.tag);
    });
};

export const update_tag = ({commit}, {id, data}) => {
    return http().post(`/tag/update/${id}`, data).then((response) => {
        commit('UPDATE_TAG', response.data);
    });
};

export const delete_tag = ({commit}, id) => {
    commit('DELETE_TAG', id);
    return http().delete(`/tag/destroy/${id}`);
};