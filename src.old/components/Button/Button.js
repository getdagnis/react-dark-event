import React from 'react';
import './Button.css';

export const Button = (props) => {
  const state = {
    name: props.title,
    onChange: props.onChange
  }
  return ( 
    <button id="button"
      className="button"
    >
        { state.name }
    </button>
   );
}
 
export default Button;