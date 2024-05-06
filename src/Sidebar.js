import React from 'react';

const Sidebar = () => {
  return (
    <div className="container ">
    <nav className="fixed top-32 left-0 h-full bg-pink-500" style={{ width: '20%' }}>
      <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
        Sidebar
      </div>
    </nav>

    <nav className="fixed top-32 left-72 h-full bg-blue-500" style={{ width: '70%' }}>
      <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
        Post
      </div>
    </nav>
    
     </div>
   
  );
};

export default Sidebar;


