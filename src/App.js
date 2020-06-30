import React from 'react';

import PetShop from './PetShop';

export default function App(){

    const handleClick = () => {
        console.log('Iniciando banco...')
    }
    return (
        <div>
            <PetShop 
                dogs={2}
                customerName={'Luiz'}
                onClick={handleClick}
            />
        </div>
    )
}