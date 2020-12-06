export const SET_ROLE = (state, roles) => {
    state.roles = roles;
};

export const ADD_ROLE = (state, data) => {
    state.roles.push(data);
};

export const EDIT_ROLE = (state, data) => {
    state.role = data.role;
    state.rolePermission = data.rolePermission;
};

export const UPDATE_ROLE = (state, data) => {
    state.roles.push(data);
};

export const updateValue = (state, data) => {
    state.rolePermission = data;
};

export const DELETE_ROLE = (state, id) => {
    state.roles = state.roles.filter(item => {
        return item.id !== id;
    });
};
