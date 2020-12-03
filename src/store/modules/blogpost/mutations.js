export const ADD_BLOG_POST = (state, data) => {
    state.blogs.push(data);
};

export const SET_BLOG_POST = (state, blogs) => {
    state.blogs = blogs;
};

export const SET_SUB_CATEGORIES = (state, subcategories) => {
    state.blogsubcategories = subcategories;
};

export const SHOW_BLOGPOST = (state, blog) => {
    state.blog = blog;
};

export const DELETE_BLOG_IMAGE = (state, blogs) => {
    state.blogs = blogs;
};

export const UPDATE_BLOG = (state, data) => {
    state.blogs.push(data);
};

export const APPROVE_BLOG = (state, data) => {
    state.blogs.concat(data);
};

export const UNAPPROVE_BLOG = (state, data) => {
    state.blogs.concat(data);
};

export const BLOG_PUBLISH = (state, data) => {
    state.blogs.concat(data);
};

export const BLOG_UN_PUBLISH = (state, data) => {
    state.blogs.concat(data);
};

export const BLOG_FEATURE = (state, data) => {
    state.blogs.concat(data);
};

export const BLOG_NOT_FEATURE = (state, data) => {
    state.blogs.concat(data);
};

export const DELETE_BLOG = (state, id) => {
    state.blogs = state.blogs.filter(item => {
        return item.id = id;
    });
};