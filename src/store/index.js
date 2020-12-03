import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

import category from './modules/category';
import subcategories from './modules/subcategories';
import tag from './modules/tag';
import blogpost from './modules/blogpost';
import permission from './modules/permission';
import role from './modules/role';

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
        category,
        subcategories,
        tag,
        blogpost,
        permission,
        role
    }
});