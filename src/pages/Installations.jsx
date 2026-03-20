import React from 'react';

const Installations = () => {
  return (
    <div className='w-11/12 mx-auto py-16 px-4'>
      <div className='text-center'>
      <h2 className='text-4xl font-bold mb-2'>Our All Applications</h2>
      <p className='text-center text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex py-10 items-center md:justify-between justify-center flex-col md:flex-row gap-3'>
        <h3 className='text-2xl underline font-medium'>(0) Apps Found</h3>
        <div>
          <select defaultValue="Pick a color" className="select w-44">
            <option disabled={true}>Sort By Size</option>
            <option>Low-High</option>
            <option>High-Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Installations;