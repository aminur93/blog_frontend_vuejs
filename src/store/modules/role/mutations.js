export const SET_ROLE = (state, roles) => {
    state.roles = roles;
};

export const ADD_ROLE = (state, data) => {
    state.roles.push(data);
};