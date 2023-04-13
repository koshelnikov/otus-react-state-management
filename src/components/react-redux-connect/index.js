import Users from "./users/users";
import {useEffect} from "react";
import {connect, Provider} from "react-redux";
import {createStore} from "redux";
import {UserService} from "../../services/user/user.service";
import {loadedUsersAction} from "../../state-management/react-redux/actions";
import {reducer} from "../../state-management/react-redux/reducer";

const Index = ({loadedUsersAction}) => {
    const userService = new UserService();

    useEffect(() => {
        userService.getUsers().then(users =>
        {
            loadedUsersAction(users)
        })
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

const E = connect(null, {loadedUsersAction})(Index)

export default () => <Provider store={store}><E/></Provider>