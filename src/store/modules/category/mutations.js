export const SET_CATEGORIES = (state, categories) => {
    state.categories = categories;
};

export const ADD_CATEGORY = (state, data) => {
    state.categories.push(data);
};

export const SET_CATEGORY = (state, category) => {
    state.category = category;
};

export const UPDATE_CATEGORY = (state, data) => {
    state.categories.push(data);
};

export const DELETE_CATEGORY = (state, id) => {
    state.categories = state.categories.filter(item => {
        return item.id !== id;
    });
};