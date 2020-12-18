import React, {useState} from "react";

export default {
    title: 'Memo demo'
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: string[] }) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dima', 'leha', 'lepeha'])
    const addUser = () => {
        const newUser = [...users, 'sveta' + new Date().getTime()]

        setUsers(newUser)
    }
    users.push('sveta' + new Date().getTime())
    return (
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={addUser}>add user</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </>
    )
}