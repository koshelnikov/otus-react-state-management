import {asyncExecution} from "../../utils/promise";
import {users} from "../data";


let id = 0;
export class UserService {

    getId() {
        return ++id;
    }

    resetId() {
        id = 0;
    }

    getUsers() {
        console.log('HTTP MOCK REQUEST: getUsers')
        return asyncExecution(() => users.map((user) => ({...user})));
    }

    getUserById(id) {
        return asyncExecution(() => users.find((user) => user.id === id));
    }

    changeRole(id, role) {
        console.log(`HTTP MOCK REQUEST: changeRole user:${id} role: ${role}`)
        return asyncExecution(() => {
            const user = users.find((user) => user.id === id);
            user.role = role;

            if (role === 'user') {
                delete user.eventsAmount
            }
        });
    }
}
