import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dimych', 'artsiom', 'valera', 'katya'])

    const newArray = useMemo(() => {
            const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
            return newArray
        },
        [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js'])

    // const newArray = useMemo(() => {
    //         const newArray = books.filter(b => b.toLowerCase().indexOf('a') > -1)
    //         return newArray
    //     },
    //     [books])

    const addBook = () => {
        console.log(books)
        // const newBook = [...books, 'angular' + new Date().getTime()]
        setBooks([...books, 'angular' + new Date().getTime()])
    }
    const memoizedAddBook = useMemo(() => {
            return () => {
                setBooks([...books, 'angular' + new Date().getTime()])
            }
        },
        [books])
    const memoizedAddBook2 = useCallback(() => {
            setBooks([...books, 'angular' + new Date().getTime()])
        },
        [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}
type BooksSecretType = {
    // books: Array<string>;
    addBook: () => void
}
const BooksSecret = (props: BooksSecretType) => {
    console.log('books')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
        </div>
    )
}
export const Books = React.memo(BooksSecret)