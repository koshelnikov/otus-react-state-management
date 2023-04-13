import {Users} from "./users/users";
import {useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "../../state-management/react-redux/reducer";
import thunk from 'redux-thunk'
import {loadUsers} from "../../state-management/redux-thunk/thunk";

const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <Users/>
    )
}


const store = createStore(
    reducer,
    {
        users: []
    },
    applyMiddleware(thunk)
);

export default () => <Provider store={store}><Index/></Provider>