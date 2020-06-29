import React,{ useEffect } from 'react';

export default function Twitter(props) {

    useEffect( () => {
        const { posts } = props;

        console.log("Iniciando aplicação");
    }, []);
    return (
        <div>
            hehe
        </div>
    );
}