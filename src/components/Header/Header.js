import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
  const {user,handleSingOut} = useFirebase()
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-indigo-200'>
      <div onClick={ () => setOpen(!open)} className='w-6 h-6 md:hidden'>
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <nav className={`md:flex justify-end absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/product'>Products</CustomLink>
      <CustomLink to='/order'>Order</CustomLink>
      <CustomLink to='/register'>Register</CustomLink>
      {user?.uid? 
      <button onClick={handleSingOut}>Sing Out</button>
      :
      <CustomLink to='/login'>Login</CustomLink>
      }
      </nav>
    </div>
  );
};

export default Header;