export const Users = (props) => {
    const isManager = (role) => role === 'manager';
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
                                       props.onRoleChanged(user.id, isManager(user.role) ? 'user' : 'manager')
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