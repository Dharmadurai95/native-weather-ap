import React, { useEffect, useState } from 'react'
import Txt from '../UI/Text'

const Clock = () => {
    const [time, setTime] = useState('')
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(timer())
        }, 1000);
        return () => clearInterval(timerId)
    }, [])
    return (<Txt>{time}</Txt>)
}

export default Clock;

function timer() {
    const date = new Date()

    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
} 