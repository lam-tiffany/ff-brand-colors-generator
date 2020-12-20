import React from 'react';

const Color = (props) => {

    const { bgColor} = props;
    return (
      <div className='color-block' style={{ backgroundColor: bgColor }}>
      </div>
    );
}

export default Color;
