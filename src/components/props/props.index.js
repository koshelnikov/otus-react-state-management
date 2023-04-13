import {Users} from "./users/users";

export const Main = ({users, onUserRoleChanged}) => {
    return (
        <div>
            <Users users={users} onRoleChanged={onUserRoleChanged}/>
        </div>
    )
}