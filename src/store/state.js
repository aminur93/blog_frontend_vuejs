export default {
    apiUrl: 'http://localhost:8000/api',
    serverPath: 'http://localhost:8000',

    token: null,
    user: {},

    getTokenLocalStorage: null,

    category_count: null,
    sub_category_count: null,
    tag_count: null,
    blog_count: null,

    categoryList: [],
    tagList: [],
    blogList: [],

    allCategoryList: [],
    allSubCategoryList: [],
    allTagsList: [],
    recentBlog: [],
    popularBlog: [],
    mainBlog: [],
    pagination: {},
    singleBlog: {},
    blogcomments: [],
    searchBlogList: [],
    contact_info: [],
    emailinfo: null,
    userinfo: null,
}