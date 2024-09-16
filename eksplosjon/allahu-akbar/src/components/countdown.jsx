import { useEffect, useState } from "react"

export default function CountDown() {

    const [time, setTime] = useState(10)

   useEffect(() => {

    const myInterval = setInterval(() => {
        if (time == 0) {
        setTime(10)
        } else {
            setTime(time - 1)
        }
    }, 1000)
    
    return () => clearInterval(myInterval);
}, [time])

    return (
        {time}
    )
}