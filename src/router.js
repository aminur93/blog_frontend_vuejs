import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

Vue.use(VueRouter);

//components
import Home from './views/admins/Home.vue';
import Blog from './views/blogs/Blog.vue';

const routes = [

    {
        path: '/dashboard',
        component: Home,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import('./views/admins/Dashboard.vue')
            },

            {
                path: 'category',
                name: 'Category',
                component: () => import('./views/admins/category/Category.vue')
            },

            {
                path: 'add_category',
                name: 'AddCategory',
                component: () => import('./views/admins/category/AddCategory.vue')
            },

            {
                path: 'edit_category/:id',
                name: 'EditCategory',
                component: () => import('./views/admins/category/EditCategory.vue')
            },

            {
                path: 'subCategory',
                name: 'subCategory',
                component: () => import('./views/admins/subcategory/subCategory.vue')
            },

            {
                path: 'add_subCategory',
                name: 'Add_SubCategory',
                component: () => import('./views/admins/subcategory/Add_SubCategory.vue')
            },
            {
                path: 'edit_subCategory/:id',
                name: 'Edit_SubCategory',
                component: () => import('./views/admins/subcategory/Edit_SubCategory.vue')
            },

            {
                path: 'tag',
                name: 'tag',
                component: () => import('./views/admins/tag/tag.vue')
            },
            {
                path: 'add_tag',
                name: 'add_tag',
                component: () => import('./views/admins/tag/add_tag.vue')
            },
            {
                path: 'edit_tag/:id',
                name: 'edit_tag',
                component: () => import('./views/admins/tag/edit_tag.vue')
            },

            {
                path: 'blogpost',
                name: 'blogpost',
                component: () => import('./views/admins/blogpost/blogpost.vue')
            },
            {
                path: 'add_blogpost',
                name: 'add_blogpost',
                component: () => import('./views/admins/blogpost/add_blogpost.vue')
            },
            {
                path: 'edit_blogpost/:id',
                name: 'edit_blogpost',
                component: () => import('./views/admins/blogpost/edit_blogpost.vue')
            },

            {
                path: 'user',
                name: 'user',
                component: () => import('./views/admins/users/user.vue')
            },

            {
                path: 'add_user',
                name: 'add_user',
                component: () => import('./views/admins/users/add_user.vue')
            },

            {
                path: 'edit_user/:id',
                name: 'edit_user',
                component: () => import('./views/admins/users/edit_user.vue')
            },

            {
                path: 'change_password/:id',
                name: 'change_password',
                component: () => import('./views/admins/users/change_password.vue')
            },

            {
                path: 'role',
                name: 'role',
                component: () => import('./views/admins/roles/role.vue')
            },

            {
                path: 'add_role',
                name: 'add_role',
                component: () => import('./views/admins/roles/add_role.vue')
            },

            {
                path: 'edit_role/:id',
                name: 'edit_role',
                component: () => import('./views/admins/roles/edit_role.vue')
            },

            {
                path: 'permission',
                name: 'permission',
                component: () => import('./views/admins/permissions/permission.vue')
            },

            {
                path: 'add_permission',
                name: 'add_permission',
                component: () => import('./views/admins/permissions/add_permission.vue')
            },

            {
                path: 'edit_permission/:id',
                name: 'edit_permission',
                component: () => import('./views/admins/permissions/edit_permission.vue')
            },

            {
                path: 'contact_us',
                name: 'contact_us',
                component: () => import('./views/admins/contactus/contact_us.vue')
            },

            {
                path: 'reply_message/:id',
                name: 'reply_message',
                component: () => import('./views/admins/contactus/reply_message.vue')
            }
        ],
        beforeEnter(to, from, next){
            if (!store.getters['AuthToken']){
                return next({
                    name: 'Login'
                });
            }else {
                //document.title = to.meta.title;
                next();
            }
        },
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Auth/Login.vue'),
        beforeEnter(to, from, next){
            if(!store.state.token)
            {
                next();
            }else {
                next('/dashboard');
            }
        }
    },

    {
        path:'/forget-password',
        name: 'ForgetPassword',
        component: () => import('./views/Auth/ForgetPassword.vue')
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import('./views/Auth/ResetPassword.vue')
    },

    {
        path: '/',
        component: Blog,
        children: [
            {
                path: '',
                name: 'BlogHome',
                component: () => import('./views/blogs/BlogHome.vue')
            },
            {
                path: '/details/:id',
                name: 'single_blog',
                component: () => import('./views/blogs/single_blog.vue')
            },

            {
                path: '/category_blog/:category_id',
                name: 'CategoryBlog',
                component: () => import('./views/blogs/CategoryBlog.vue')
            },

            {
                path: '/sub_category_blog/:sub_cat_id',
                name: 'SubCategoryBlog',
                component: () => import('./views/blogs/SubCategoryBlog.vue')
            },

            {
                path: '/tag_blog/:tag_id',
                name: 'TagBlog',
                component: () => import('./views/blogs/TagBlog.vue')
            },

            {
                path: 'about',
                name: 'about_us',
                component: () => import('./views/blogs/about_us.vue')
            },
            {
                path: 'contact',
                name: 'contact',
                component: () => import('./views/blogs/contact_us.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;