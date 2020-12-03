import {http} from "../../../apiServices/http_services";

export const getCategory = ({commit}) => {
    return http().get('/category').then((response) => {
        commit('SET_CATEGORIES', response.data.category);
    });
};

export const add_category = ({commit}, data) => {

    return http().post('/category/store', data)
        .then((response) => {
            commit('ADD_CATEGORY', response.data);
        });
};

export const showCategory = ({commit}, id) => {
    return http().get(`/category/edit/${id}`).then((response) => {
        commit('SET_CATEGORY', response.data.edit_category_data);
    });
};

export const update_category = ({commit},{id,data}) => {

    return http().post(`/category/update/${id}`, data)
        .then((response) => {
            commit('UPDATE_CATEGORY', response.data);
        });
};

export const delete_category = ({commit}, id) => {
    commit('DELETE_CATEGORY', id);
    return http().delete(`/category/destroy/${id}`)
};