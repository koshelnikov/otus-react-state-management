import {UserService} from "../../services/user/user.service";
import {loadedEventsAmountAction, loadedUsersAction} from "./actions";
import {loadedUserAction} from "../react-redux/actions";
import {EventsService} from "../../services/events/events.service";

const userService = new UserService()
const eventService = new EventsService();

export const loadUsers =  () => async dispatch => {
    const users = await userService.getUsers();
    dispatch(loadedUsersAction(users));
}

export const changeRole = (id, role) => async dispatch => {
    userService.changeRole(id, role)
        .then(() => {
            userService.getUserById(id).then(user => {
                dispatch(loadedUserAction(user));

                if (user.role === 'manager') {
                    eventService.getEventsAmount(id).then(eventsAmount => {
                        dispatch(loadedEventsAmountAction(id, eventsAmount))
                    })
                }
            })
        });
}