import { useState, useEffect } from 'react'
export default function Student(props) {




    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
        </div>
    )
}