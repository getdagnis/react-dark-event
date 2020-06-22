import React from 'react';

export const Subcategory = props => (

    <li key={ props.id }><strong>{ props.name }</strong> ({ 
        (Math.random(0, 10) * 10 > 8) ? 0 : Math.floor(Math.random(0, 100) * 40)
    })</li>

)
