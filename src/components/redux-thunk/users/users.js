import {useDispatch, useSelector} from "react-redux";
import {UserService} from "../../../services/user/user.service";
import {EventsService} from "../../../services/events/events.service";
import {loadedEventsAmountAction, loadedUserAction} from "../../../state-management/redux-saga/actions";
import {changeRole} from "../../../state-management/redux-thunk/thunk";

export const Users = () => {
    const userService = new UserService();
    const eventService = new EventsService();

    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();

    const isManager = (role) => role === 'manager';
    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>
                        <span>{user.name} </span>
                        <label>
                            Role manager:
                            <input type='checkbox'
                                   checked={isManager(user.role)}
                                   onChange={(e) => {
                                       e.preventDefault();
                                       const role = isManager(user.role) ? 'user' : 'manager';
                                       dispatch(changeRole(user.id, role));
                                   }}
                            />
                        </label>

                        {isManager(user.role) && user.eventsAmount && user.eventsAmount > 0 &&
                        <span>Events for you: {user.eventsAmount}</span>}
                    </div>
                })
            }
        </div>
    )
}