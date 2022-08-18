import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetingsApi } from '../redux/greetings/greetings'

const Greetings = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGreetingsApi())
    }, [dispatch]);
    const message = useSelector((state) => state.greetingsReducer)
    return (
        <div>
            <h2>Please you have to refresh to get a message</h2>
            <h1>{message}</h1>
        </div>
    )
}

export default Greetings