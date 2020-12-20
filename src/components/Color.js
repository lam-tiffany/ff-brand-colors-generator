import React from 'react';

const Color = (props) => {

    const { color} = props;
    return (
      <div className='color-block' style={{ backgroundColor: color }}>
      </div>
    );
}

export default Color;
