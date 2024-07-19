import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-third py-2 px-6 transition-all rounded-lg text-white'>
            
            {props.title}
        </button>
    </div>
  );
};

export default Button