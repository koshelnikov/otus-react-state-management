import {Users} from "./users/users";
import {useEffect} from "react";
import createSagaMiddleware from "redux-saga";
import {Provider, useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../../state-management/redux-saga/actions";
import rootSaga from "../../state-management/redux-saga/saga";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "../../state-management/redux-saga/reducers";

const Index = () => {

    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <Users users={users}/>
    )
}

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducer,
    {
        users: []
    },
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default () => <Provider store={store}><Index/></Provider>