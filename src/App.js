import React, { useRef, useEffect, useState } from 'react';

export default function App(){

    const inputRef = useRef();
    const count = useRef(1);

    const [, setValue] = useState(false);

    const handleClick = () => {
        inputRef.current.focus()
        console.log(inputRef.current)
    }

    useEffect( () => {
        setTimeout( () => {
            count.current = 300
            setValue(true);
        }, 400)   
    })
    return (
        <>  
            <h1>Valor de count: {count.current}</h1>
            Foco: <input ref={inputRef}/>
            <button onClick={handleClick}>Focar</button>
        </>
    )
}