export const SET_TOKEN = (state, token) => {
    state.token = token;
};

export const SET_USER = (state, data) => {
    state.user = data;
};

export const COUNT_CATEGORY = (state, countCategory) => {
    state.category_count = countCategory;
};

export const COUNT_SUB_CATEGORY = (state, countSubCategory) => {
    state.sub_category_count = countSubCategory;
};

export const COUNT_TAG = (state, countTag) => {
    state.tag_count = countTag;
};

export const COUNT_BLOG = (state, countBlog) => {
    state.blog_count = countBlog;
};

export const CATEGORY_LIST = (state, categoriesList) => {
    state.categoryList = categoriesList;
};

export const TAG_LIST = (state, tagsList) => {
    state.tagList = tagsList;
};

export const BLOG_LIST = (state, blogsList) => {
    state.blogList = blogsList;
};

export const FRONT_GET_ALL_CATEGORY = (state, getCategories) => {
    state.allCategoryList = getCategories;
};

export const FRONT_GET_ALL_SUB_CATEGORY = (state, getSubCategories) => {
    state.allSubCategoryList = getSubCategories;
};

export const FRONT_GET_TAG = (state, getTags) => {
    state.allTagsList = getTags;
};

export const FRONT_GET_RECENT_BLOG = (state, getRecent) => {
    state.recentBlog = getRecent;
};

export const FRONT_GET_POPULAR_BLOG = (state, getPopular) => {
    state.popularBlog = getPopular;
};

export const FRONT_GET_MAIN_BLOG = (state, getmainBlog) => {
    state.mainBlog = getmainBlog;
};

export const FRONT_PAGINATION = (state, pagination) => {
    state.pagination = pagination;
};

export const BLOG_VIEW_UPDATE = (state, data) => {

    state.mainBlog.concat(data);
};

export const SINGLE_BLOG_LIST = (state, singleBlog) => {
    state.singleBlog = singleBlog;
};

export const BLOG_COMMENTS = (state, data) => {
    state.blogcomments.push(data);
};

export const GET_COMMENTS_LIST = (state, commentsList) => {
    state.blogcomments = commentsList;
};

export const CATEGORY_BLOG = (state, categoryBlog) => {
    state.mainBlog = categoryBlog;
};

export const SUB_CATEGORY_BLOG = (state, subCategoryBlog) => {
    state.mainBlog = subCategoryBlog;
};

export const TAG_BLOG = (state, tagBlog) => {
    state.mainBlog = tagBlog;
};

export const SEARCH_BLOG = (state, searchBlog) => {
    state.searchBlogList = searchBlog;
};

export const SEARCH_ALL_BLOG_LIST = (state, searchAllBlog) => {
    state.mainBlog = searchAllBlog;
};

export const CONTACT_US = (state, data) => {
    state.contact_info = data;
};

export const EMAIL_SEND = (state, data) => {
    state.emailinfo = data;
};

export const RESET_PASSWORD = (state, data) => {
    state.userinfo = data;
};

export const USER_LIST = (state, data) => {
    state.user_list = data;
};

export const SET_CONTACT_MESSAGE = (state, data) => {
    state.contact_info = data;
};

export const SINGLE_CONTACT = (state, data) => {
    state.single_contact = data;
};

export const Email_SEND = (state, data) => {
    state.emailinfo = data;
};