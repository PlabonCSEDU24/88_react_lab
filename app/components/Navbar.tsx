import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
      <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/'>Todo</Link>
      </h1>

      {/* <h1 className='text-md text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/users'>Users</Link>
      </h1> */}
      {/* <Search /> */}
    </nav>
  );
};

export default Navbar;
