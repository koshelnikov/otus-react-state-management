import {useDispatch} from "react-redux";
import {changeRoleAction} from "../../../state-management/redux-saga/actions";

export const Users = (props) => {
    const isManager = (role) => role === 'manager';
    const dispatch = useDispatch();
    return (
        <div>
            {
                props.users.map((user) => {
                    return <div key={user.id}>
                        <span>{user.name} </span>
                        <label>
                            Role manager:
                            <input type='checkbox'
                                   checked={isManager(user.role)}
                                   onChange={(e) =>
                                   {
                                       e.preventDefault();
                                       dispatch(changeRoleAction(user.id, isManager(user.role) ? 'user' : 'manager'))
                                   }}
                            />
                        </label>

                        {isManager(user.role) && user.eventsAmount && user.eventsAmount > 0 && <span>Events for you: {user.eventsAmount}</span>}
                    </div>
                })
            }
        </div>
    )
}