import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; ++i) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </>
    )
}
const UsersSecret = (props: { users: string[] }) => {
    debugger
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    debugger
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['dima', 'leh', 'lepeh'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUser = () => {
        const newUser = [...users, `sveta ${new Date().getSeconds()}`]
        setUsers(newUser)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


export const LikeUseCallback = () => {
    console.log('LIkeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'html', 'css'])

    const memoizedAddBook = useMemo(() => {
        console.log(books)
        return () => {
            const newBook = [...books, `angular ${new Date().getSeconds()}`]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(`books callback: ${books}`)
        const newBook = [...books, `angular ${new Date().getSeconds()}`]
        setBooks(newBook)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books addBook={memoizedAddBook2}/>
        </>
    )
}
type booksSecretsType = {
    addBook: () => void
}
const BooksSecret = (props: booksSecretsType) => {
    console.log('books')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Books = React.memo(BooksSecret)