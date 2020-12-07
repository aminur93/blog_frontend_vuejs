export const SET_USERS = (state, users) => {
    state.users = users;
};

export const SET_ROLES = (state, roles) => {
    state.roles = roles;
};

export const ADD_USER = (state, users) => {
    state.users.push(users);
};

export const EDIT_USER = (state, data) => {
    state.user = data.user;
    state.user_role = data.userRoles;
};

export const updateValueRole = (state, data) => {

    state.user_role = data;
};

export const UPDATE_USER = (state, data) => {
    state.users.push(data);
};

export const CHANGE_PASSWORD_USER = (state, data) => {
    state.users.push(data);
};

export const DELETE_USER = (state, id) => {
    state.users = state.users.filter(item => {
        return item.id !== id;
    })
};

