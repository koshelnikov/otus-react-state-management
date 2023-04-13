import {Users} from "./users/users";
import {UserService} from "../../services/user/user.service";
import {EventsService} from "../../services/events/events.service";
import {useEffect, useState} from "react";

const SagaIndex = () => {
    const userService = new UserService();
    const messageService = new EventsService();
    const [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getUsers().then(users => setUsers(users))
    }, [])

    const onRoleChanged = (id, role) => {
        userService.changeRole(id, role).then(() => {
            userService.getUserById(id).then(result => {
                let user = users.find((user) => user.id === result.id);
                user.role = result.role;

                if (role === 'manager') {
                    messageService.getEventsAmount(id)
                        .then(value => {
                            user.eventsAmount = value
                            setUsers([...users]);
                        })
                } else {
                    delete user.eventsAmount;
                    setUsers([...users]);
                }
            });
        })
    }
    return (
        <Users users={users} onRoleChanged={onRoleChanged}/>
    )
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, {
    messages: [],
    isLoading: false
}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


<Provider>

</Provider>