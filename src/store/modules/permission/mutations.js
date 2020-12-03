export const SET_PERMISSION = (state, permissions) => {
    state.permissions = permissions;
};

export const ADD_PERMISSION = (state, permissions) => {
    state.permissions.push(permissions);
};

export const EDIT_PERMISSION = (state, permission) => {
    state.permission = permission;
};

export const UPDATE_PERMISSION = (state, data) => {
    state.permissions.push(data);
};

export const DELETE_PERMISSION = (state, id) => {
  state.permissions = state.permissions.filter(item => {
      return item.id !== id;
  })
};