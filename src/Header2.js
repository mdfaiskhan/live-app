import React from 'react';

const Header2 = () => {
  return (
    <section className='bg-blue-500 fixed top-16 left-0 w-full z-10'>
      <div className="container mx-auto">
        <ul className='flex justify-evenly items-center p-6'>
          <li><a href="">HOME</a></li>
          <li><a href="">WEB</a></li>
          <li><a href="">ABOUT</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Header2;

