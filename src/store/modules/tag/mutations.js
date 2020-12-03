export const SET_TAG = (state, tags) => {
    state.tags = tags;
};

export const ADD_TAG = (state, data) => {
    state.tags.push(data);
};

export const SHOW_TAG = (state, tag) => {
    state.tag = tag;
};

export const UPDATE_TAG = (state, data) => {
    state.tags.push(data);
};

export const DELETE_TAG = (state, id) => {
    state.tags = state.tags.filter(item => {
        return item.id !== id;
    });
};