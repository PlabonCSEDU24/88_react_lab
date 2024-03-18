'use client';

import { login } from '@/lib/db';
import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = login(formData);
    if (res === 'ok') {
      toast.success('Successfully logged in');
    }
    if (res === 'pass') {
      setErr("password doesn't match.");
    }
    if (res === '404') {
      setErr("password doesn't match.");
    }
  };

  const content = (
    <>
      <section className='bg-white text-center text-gray-400'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-gray-600'>
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className=' space-y-4 md:space-y-6'
                action='#'
              >
                <div className='text-left'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-indigo-900'
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type='email'
                    name='email'
                    id='email'
                    className='bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div className='text-left'>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-indigo-900'
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        className='w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-primary-300'
                        required
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label htmlFor='remember' className='text-indigo-500'>
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='text-sm font-medium text-primary-600 hover:underline'
                  >
                    Forgot password?
                  </a>
                </div>
                <div className='text-red-700'> {err}</div>
                <button
                  type='submit'
                  className='w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Sign in
                </button>
                <p className='text-sm font-light text-indigo-500'>
                  Don’t have an account yet?{' '}
                  <Link
                    href='/register'
                    className='font-medium text-indigo-600 hover:underline'
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );

  return content;
}
