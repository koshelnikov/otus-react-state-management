import {takeEvery, put, call} from 'redux-saga/effects';
import {
    LOAD_USERS,
    CHANGE_ROLE,
    LOAD_EVENTS_AMOUNT,
    LOAD_USER,
    loadEventsAmountAction, loadedUsersAction, loadedEventsAmountAction, loadedUserAction
} from "./actions";
import {UserService} from "../../services/user/user.service";
import {EventsService} from "../../services/events/events.service";

const userService = new UserService();
const eventsService = new EventsService();

function* loadUsersSaga() {
    const users = yield userService.getUsers();
    yield put(loadedUsersAction(users))
}

function* loadUserSaga(action) {
    const {id} = action.payload;
    const user = yield userService.getUserById(id);
}

function* loadEventsAmountSaga(action) {
    const {id} = action.payload;
    const events = yield eventsService.getEventsAmount(id);
    yield put(loadedEventsAmountAction(id, events))
}

function* changeRoleSaga(action) {
    const {id, role} = action.payload;
    yield userService.changeRole(id, role);
    const user = yield userService.getUserById(id);
    yield put(loadedUserAction(user));
    yield put(loadEventsAmountAction(id));
}

export default function* rootSaga() {
    yield takeEvery(LOAD_USERS, loadUsersSaga)
    yield takeEvery(CHANGE_ROLE, changeRoleSaga)
    yield takeEvery(LOAD_USER, loadUserSaga)
    yield takeEvery(LOAD_EVENTS_AMOUNT, loadEventsAmountSaga);
}