import { useState } from "react";

export default function Clock() {

    const [time, setTime] = useState(Date.now())

    setInterval(() => {
        setTime(Date.now())
    }, 1000)

    return (
        <>
            <p>{new Date(time).toLocaleTimeString()}</p>
        </>
    )
}