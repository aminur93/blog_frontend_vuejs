export const SET_SUB_CATEGORY = (state, subcategories) => {
    state.subcategories = subcategories;
};

export const ADD_SUB_CATEGORY = (state, data) => {
    state.subcategories.push(data);
};

export const SHOW_SUB_CAT = (state, subCategory) => {
    state.subcategory = subCategory;
};

export const UPDATE_SUB_CAT = (state, data) => {
    state.subcategories.push(data);
};

export const DELETE_SUB_CATEGORY = (state, id) => {
    state.subcategories = state.subcategories.filter(item => {
        return item.id !== id;
    })
};