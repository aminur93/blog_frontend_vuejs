import {http, httpFile} from "../../../apiServices/http_services";

export const blog_subcategories = ({commit}, category_id) => {
    return http().get(`/blogpost/get_subcategories/${category_id}`).then((response) => {
        commit('SET_SUB_CATEGORIES', response.data.subcategory);
    });
};

export const add_blogpost = ({commit}, data) => {
    return httpFile().post('/blogpost/store', data).then((response) => {
        commit('ADD_BLOG_POST', response.data);
    });
};

export const get_Blog_Post = ({commit}) => {
    return http().get('/blogpost').then((res) => {
        commit('SET_BLOG_POST', res.data.blogPosts);
    });
};

export const show_blogpost = ({commit}, id) => {
    return http().get(`/blogpost/edit/${id}`).then((response) => {
        commit('SHOW_BLOGPOST', response.data.blogPost);
    });
};

export const delete_image = ({commit}, id) => {
    return http().post(`/blogpost/delete_image/${id}`).then((response) => {
        commit('DELETE_BLOG_IMAGE', response.data.updateBlog);
    });
};

export const update_blog = ({commit}, {id, data}) => {
    return httpFile().post(`/blogpost/update/${id}`, data).then((response) => {
        commit('UPDATE_BLOG', response.data);
    });
};

export const blog_approve = ({commit}, id) => {
    return http().post(`/blogpost/approve/${id}`).then((response) => {
        commit('APPROVE_BLOG', response.data);
        //console.log(response.data);
    });
};

export const blog_unapprove = ({commit}, id) => {
    return http().post(`/blogpost/unapprove/${id}`).then((response) => {
        commit('UNAPPROVE_BLOG', response.data);
        //console.log(response.data);
    });
};

export const blog_publish = ({commit}, id) => {
    return http().post(`/blogpost/publish/${id}`).then((response) => {
        commit('BLOG_PUBLISH', response.data)
    });
};

export const blog_unpublish = ({commit}, id) => {
    return http().post(`/blogpost/unpublish/${id}`).then((response) => {
        commit('BLOG_UN_PUBLISH', response.data)
    });
};

export const blog_feature = ({commit}, id) => {
    return http().post(`/blogpost/feature/${id}`).then((response) => {
        commit('BLOG_FEATURE', response.data);
    });
};

export const blog_unfeature = ({commit}, id) => {
    return http().post(`/blogpost/notfeature/${id}`).then((response) => {
        commit('BLOG_NOT_FEATURE', response.data);
    });
};

export const delete_blogpost = ({commit}, id) => {
    return http().delete(`/blogpost/destroy/${id}`).then(() => {
        commit('DELETE_BLOG', id);
    });
};