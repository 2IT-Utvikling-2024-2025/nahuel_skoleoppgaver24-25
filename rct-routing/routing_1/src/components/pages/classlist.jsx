import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Student from "../student.jsx"
import StudentPage from "./personInfo.jsx"

export default function ClassList() {

    const [classList, setClassList] = useState([]);

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <>
            
            <h1>ClassList</h1>
            {students.map((student) => (
                    <button key={student.id} id="poopy-pants">
                        <p>{student.name}</p>
                        <p>{student.age}</p>
                    </button>
            ))}

        </>
    )
}