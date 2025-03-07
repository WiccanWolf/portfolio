import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='loading-box'>
      <p>Page is loading, please wait.</p>
      <ThreeDots
        className='loading'
        visible={true}
        height='80'
        width='80'
        color='black'
        radius='9'
        ariaLabel='three-dots-loading'
      />
    </div>
  );
};

export default Loading;
