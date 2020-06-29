import React, { useContext } from 'react';


import { ThemeContext } from '../Theme';

export default function Card(){
    const theme = useContext(ThemeContext);
    
    return (
        <div>
            <button style={{ background: theme.background, color: theme.color }}>Card Button</button>
        </div>
    )
}