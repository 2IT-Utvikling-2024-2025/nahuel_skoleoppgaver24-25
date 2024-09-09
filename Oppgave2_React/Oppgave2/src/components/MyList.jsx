import { useState } from "react"


const mylist = [
    { title: 'Banan', id: 1},
    { title: 'Eple', id: 2},
    { title: 'Pære', id: 3},
]

export default function MyList() {

    const[vote, setVote] = useState(0)

    function handleclick() {
        setVote(vote + 1)
    }

    const listItems = mylist.map(item =>
        <li key={item.id}>
            {item.title}
            <VoteButton vote={vote} onclick={handleclick}></VoteButton>
        </li>
    )


    return (
        <>
            <h1>MyList</h1>
            <ul>{listItems}</ul>
        </>
    )
} 

function VoteButton({vote, onClick}) {
    



    return (
        <button onClick={onClick}>
            Voted {vote} times
        </button>
    )
}

