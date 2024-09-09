import { useState } from 'react'
import './css/MyHobbies.css'
import logo from '/pfp-none.png'

const hobbies = [
    {title: "Gaming", isfavorite: true, upvote: 0, id: 1},
    {title: "Lesing", isfavorite: false, upvote: 0, id: 2}
    
]
export default function MyHobbies() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id} style={ { color: hobby.isfavorite ? 'magenta' : 'white' }}>
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return (

    
        <>
            <div className='profile'>
                <img src={logo} alt="profile picture" className='pfp'/>

                <ul className='abilities'>{listItems}</ul>
            </div>
        </>
    )
}

function VoteButton() {
    const [vote, setVote] = useState(0)

    function handleclick() {
        setVote(vote + 1)
    }

    return (
        <button className='button' onClick={handleclick}>
            Voted {vote} times 
        </button>    
    )
}