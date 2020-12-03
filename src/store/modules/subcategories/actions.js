import {http} from "../../../apiServices/http_services";

export const get_subCategory = ({commit}) => {
    return http().get('/subcategory').then((response) => {
        commit('SET_SUB_CATEGORY', response.data.sub_categories);
    });
};

export const add_subcategory = ({commit}, data) => {
    return http().post('/subcategory/store', data).then((response) => {
            commit('ADD_SUB_CATEGORY', response.data);
    });
};

export const ShowSubCategory = ({commit}, id) => {
    return http().get(`/subcategory/edit/${id}`).then((response) => {
        commit('SHOW_SUB_CAT', response.data.sub_category);
    });
};

export const updateSubCategory = ({commit}, {id, data}) => {
    return http().post(`/subcategory/update/${id}`, data).then((response) => {
        commit('UPDATE_SUB_CAT', response.data)
    });
};

export const delete_subCategory = ({commit}, id) => {
    commit('DELETE_SUB_CATEGORY',id);
    return http().delete(`/subcategory/destroy/${id}`);
};