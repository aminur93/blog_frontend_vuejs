
export const authenticated = (state) => {
    return state.token && state.user
};

export const AuthToken = (state) => {
    return state.token
};

export const userInfo = (state) => {
    return state.user;
};

export const allCategories = (state) => {

    return state.allCategoryList
};

export const AllSubCategories = (state) => {
    return state.allSubCategoryList;
};

export const AllTags = (state) => {
    return state.allTagsList;
};

export const RecentBlog = (state) => {
    return state.recentBlog;
};

export const PopularBlog = (state) => {
    return state.popularBlog;
};

export const searchBlog = (state) => {
    return state.searchBlogList;
};
