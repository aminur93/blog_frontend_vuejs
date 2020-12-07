import {http} from "../apiServices/http_services";

export const login = ({dispatch}, data) => {

    return http().post('/auth/signin', data)
        .then(response => {
            dispatch('attempt', response.data.token);
            dispatch('setToken', response.data.token);
        });
};

export const attempt = ({commit, state}, token) => {
    if (token){
        commit('SET_TOKEN', token);
    }

    if (!state.token) {
        return
    }

    try {
         return http().get('/auth/me')
            .then(response => {
                commit('SET_USER', response.data);
            });
    }catch (e) {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
    }
};

export const setToken = (_, token) => {
    localStorage.setItem('token', token);
};

export const logout = ({commit}) => {

    return http().get('/auth/signout')
        .then(response => {

            console.log(response.data.message);

            commit('SET_TOKEN', null);
            commit('SET_USER', null);

            localStorage.removeItem('token');
        });
};

export const send_email = ({commit},data) => {
    return http().post('auth/forgetPassword',data).then((response) => {
        commit('EMAIL_SEND', response.data);
    });
};

export const change_password = ({commit}, data) => {
    return http().post('auth/changePassword', data).then((response)=>{
        commit('RESET_PASSWORD', response.data);
    });
};

export const Category_Count = ({commit}) => {
    return http().get('/dashboard/categoryCount').then((response) => {
        commit('COUNT_CATEGORY', response.data.category_count);
    });
};

export const Sub_Category_Count = ({commit}) => {
    return http().get('/dashboard/subCategoryCount').then((response) => {
        commit('COUNT_SUB_CATEGORY', response.data.sub_category_count);
    });
};

export const Tag_Count = ({commit}) => {
    return http().get('/dashboard/tagCount').then((response) => {
        commit('COUNT_TAG', response.data.tag_count);
    });
};

export const Blog_Count = ({commit}) => {
    return http().get('/dashboard/blogCount').then((response) => {
        commit('COUNT_BLOG', response.data.blog_count);
    });
};

export const getCategoryList = ({commit}) => {
    return http().get('/dashboard/get_category').then((response) => {
        commit('CATEGORY_LIST', response.data.category_list);
    });
};

export const getTagList = ({commit}) => {
    return http().get('/dashboard/get_tag').then((response) => {
        commit('TAG_LIST', response.data.tag_list);
    });
};

export const getBlogList = ({commit}) => {
    return http().get('/dashboard/get_blog').then((response) => {
        commit('BLOG_LIST', response.data.blog_list);
    });
};

export const getUserList = ({commit}) => {
    return http().get('/dashboard/get_user').then((response) => {
        commit('USER_LIST', response.data.user_list);
    });
};



export const getAllCategories = ({commit}) => {
    return http().get('front/get_category').then((response) => {
        commit('FRONT_GET_ALL_CATEGORY', response.data.categories);
    });
};

export const getAllSubCategories = ({commit}) => {
    return http().get('front/get_subcategory').then((response) => {
        commit('FRONT_GET_ALL_SUB_CATEGORY', response.data.sub_categories);
    });
};

export const getAllTags = ({commit}) => {
    return http().get('front/get_Tag').then((response) => {
        commit('FRONT_GET_TAG', response.data.tags);
    });
};

export const getRecentBlog = ({commit}) => {
    return http().get('front/get_recent_blog').then((response) => {
        commit('FRONT_GET_RECENT_BLOG', response.data.recent_blog);
    });
};

export const getPopularBlog = ({commit}) => {
    return http().get('front/get_popular_blog').then((response) => {
        commit('FRONT_GET_POPULAR_BLOG', response.data.popular_blog);
    });
};

export const getMainBlog = ({commit, dispatch, state}) => {
    return http().get('front/get_main_blog?page='+state.pagination.current_page).then((response) => {
        commit('FRONT_GET_MAIN_BLOG', response.data.blogPosts.data);
        dispatch('configPagination', response.data.blogPosts);
    });
};

export const configPagination = ({commit}, data) => {
    if (data){

        let paginationList = {
            last_page: '',
            current_page: 1,
            total: '',
            last_page_url: '',
            next_page_url: '',
            prev_page_url: '',
            from: '',
            to: '',
            per_page:''
        };

        paginationList.last_page = data.last_page;
        paginationList.current_page = data.current_page;
        paginationList.total = data.total;
        paginationList.last_page_url = data.last_page_url;
        paginationList.next_page_url = data.next_page_url;
        paginationList.prev_page_url = data.prev_page_url;
        paginationList.from = data.from;
        paginationList.to = data.to;
        paginationList.per_page = data.per_page;

        commit('FRONT_PAGINATION', paginationList);
    }

};

export const view_update = ({commit},{id,view_count}) => {
    return http().get(`front/blog_view_update?id=${id}&view_count=${view_count}`).then((res) => {
        commit('BLOG_VIEW_UPDATE', res.data);
    });
};

export const SingleBlog = ({commit}, id) => {
    return http().get(`front/singleBlog/${id}`).then((response) => {
        commit('SINGLE_BLOG_LIST', response.data.single_blog);
    });
};

export const blog_comments = ({commit}, {id, data}) => {
    return http().post(`front/blog_comment/${id}`, data).then((response) => {
        commit('BLOG_COMMENTS', response.data);
    });
};

export const CommentsList = ({commit}, id) => {
    return http().get(`front/get_comment?id=${id}`).then((response) => {
        commit('GET_COMMENTS_LIST', response.data.comments_list);
    });
};

export const CategoryBlog = ({commit, dispatch, state}, category_id) => {
    return http().get(`front/get_Category_blog/${category_id}?page=`+state.pagination.current_page).then((response) => {
        commit('CATEGORY_BLOG', response.data.categoryBlog.data);
        dispatch('configPagination', response.data.categoryBlog);
    });
};

export const SubCategoryBlog = ({commit, dispatch, state}, sub_cat_id) => {
    return http().get(`front/get_SubCategory_blog/${sub_cat_id}?page=`+state.pagination.current_page).then((response)=>{
        commit('SUB_CATEGORY_BLOG', response.data.SubCategoryBlog.data);
        dispatch('configPagination', response.data.SubCategoryBlog);
    });
};

export const TagBlog = ({commit, dispatch, state}, tag_id) => {
    return http().get(`front/get_Tag_blog/${tag_id}?page=`+state.pagination.current_page).then((response)=>{
        commit('TAG_BLOG', response.data.tagBlog.data);
        dispatch('configPagination', response.data.tagBlog);
    });
};

export const searchBlogList = ({commit}, search) => {
    return http().get(`front/BlogSearchList?search=${search}`).then((response) => {
        commit('SEARCH_BLOG', response.data.searchBlog);
    });
};

export const searchAllBlogList = ({commit, dispatch, state}, search) => {
    return http().get(`front/SearchBlog?search=${search}&page=`+state.pagination.current_page).then((response) => {
        commit('SEARCH_ALL_BLOG_LIST', response.data.searchListBlog.data);
        dispatch('configPagination', response.data.searchListBlog);
    });
};

export const contact_blog = ({commit}, data) => {
    return http().post('front/contact_us', data).then((response) => {
        commit('CONTACT_US', response.data);
    });
};




