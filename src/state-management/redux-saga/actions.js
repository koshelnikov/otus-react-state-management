export const LOAD_USERS = 'LOAD_USERS';
export const LOADED_USERS = 'LOADED_USERS';
export const LOAD_USER = 'LOAD_USER';
export const LOADED_USER = 'LOADED_USER';
export const CHANGE_ROLE = 'CHANGE_ROLE';
export const CHANGED_ROLE = 'CHANGED_ROLE'
export const LOAD_EVENTS_AMOUNT = 'LOAD_EVENTS_AMOUNT';
export const LOADED_EVENTS_AMOUNT = 'LOADED_EVENTS_AMOUNT';

export const loadUsers = () => {
    return {
        type: LOAD_USERS
    }
}

export const loadedUsersAction = (users) => {
    return {
        type: LOADED_USERS,
        payload: users
    }
}

export const loadedUserAction = (user) => {
    return {
        type: LOADED_USER,
        payload: {user}
    }
}


export const changeRoleAction = (id, role) => {
    return {
        type: CHANGE_ROLE,
        payload: {id, role}
    }
}

export const loadEventsAmountAction = (id) => {
    return {
        type: LOAD_EVENTS_AMOUNT,
        payload: {id}
    }
}

export const loadedEventsAmountAction = (id, eventsAmount) => {
    return {
        type: LOADED_EVENTS_AMOUNT,
        payload: {id, eventsAmount}
    }
}