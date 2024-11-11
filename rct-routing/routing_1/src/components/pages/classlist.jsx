import Student from "../student.jsx"
export default function ClassList() {

    const [classList, setClassList] = useState([
        { id: 1, name: "Per", age: 10 },
        { id: 2, name: "Pål", age: 11 },
        { id: 3, name: "Espen", age: 11 },
        { id: 4, name: "Kari", age: 11 },
        { id: 5, name: "Mari", age: 11 },
    ])

    return (
        <div>
            <h1>ClassList</h1>

        </div>
    )
}