import React from 'react';

const Register = () => {
  return (
    <div className='mt-28'>
      <h3 className='text-4xl'>Please Register</h3>
<form className='mt-8'>
  <label class="block">
  <span class="block text-sm font-medium text-slate-700">Name</span>
    <input type="text" class="border-2"/>
  </label>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="border-2"/>
  </label>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Password</span>
    <input type="password" class="border-2"/>
  </label>
  <button className='border-2 px-5 py-2 rounded bg-red-400 text-white mt-3'>Register</button>
</form>
    </div>
  );
};

export default Register;