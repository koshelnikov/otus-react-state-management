import {useDispatch, useSelector} from "react-redux";
import {UserService} from "../../../services/user/user.service";
import {EventsService} from "../../../services/events/events.service";
import {loadedEventsAmountAction, loadedUserAction} from "../../../state-management/redux-saga/actions";

export const Users = (props) => {
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

                                       userService.changeRole(user.id, role)
                                           .then(() => {
                                               userService.getUserById(user.id).then(user => {
                                                   console.log(user);
                                                   dispatch(loadedUserAction(user));

                                                   if (isManager(user.role)) {
                                                       eventService.getEventsAmount(user.id).then(eventsAmount => {
                                                           dispatch(loadedEventsAmountAction(user.id, eventsAmount))
                                                       })
                                                   }
                                               })
                                           });
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