
const hobbies = [
    {title: "utvikling", isfavore: false, upvote: 0, id: 1},
    {title: "Gaming", isfavore: true, upvote: 0, id: 2}
]
export default function MyHobbies() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id}>
            {hobby.title}
        </li>
    )

    return (
        <>
            <h1>Nahuel</h1>

            <ul>{listItems}</ul>
        </>
    )
}