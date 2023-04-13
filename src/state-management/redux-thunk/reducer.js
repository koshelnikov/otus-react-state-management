import {LOADED_USERS, CHANGED_ROLE, LOADED_EVENTS_AMOUNT, LOADED_USER} from "./actions";
const initiateState = {
    users: []
}
export const reducer = (state = initiateState, action) => {
    switch (action.type) {
        case LOADED_USERS:
            return {
                ...state,
                users: action.payload
            }

        case LOADED_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.user.id) {
                        user = action.payload.user;
                    }

                    return user;
                })
            }
        case CHANGED_ROLE:
            return  {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        user.role = action.payload.role;
                    }
                    return user;
                })
            }
        case LOADED_EVENTS_AMOUNT:

            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        user.eventsAmount = action.payload.eventsAmount;
                    }

                    return user;
                })
            }
    }

    return state;
}