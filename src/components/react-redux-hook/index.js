import {Users} from "./users/users";
import {useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {createStore} from "redux";
import {UserService} from "../../services/user/user.service";
import {loadedUsersAction} from "../../state-management/react-redux/actions";
import {reducer} from "../../state-management/react-redux/reducer";

const Index = () => {
    const userService = new UserService();
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getUsers().then(users => dispatch(loadedUsersAction(users)))
    }, [])

    return (
        <Users/>
    )
}


const store = createStore(
    reducer,
    {
        users: []
    }
);

export default () => <Provider store={store}><Index/></Provider>