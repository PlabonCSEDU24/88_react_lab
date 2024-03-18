'use client';

import { addUser } from '@/lib/db';
import Link from 'next/link';
import { Router } from 'next/router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addUser(formData);
    toast.success('Successfully Signed up.');
  };

  const content = (
    <>
      <section className='bg-white text-center'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-2xl'>
                Create an Account
              </h1>
              <form
                onSubmit={handleSubmit}
                className='space-y-4 md:space-y-6'
                action='#'
              >
                <div className='text-left'>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-indigo-70'
                  >
                    Your Name
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type='text'
                    name='name'
                    id='name'
                    className='bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    placeholder='your name'
                    required
                  />
                </div>
                <div className='text-left'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-indigo-70'
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type='email'
                    name='email'
                    id='email'
                    className='bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div className='text-left'>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-indigo-70'
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
                    className='bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Sign Up
                </button>
                <p className='text-sm font-light text-indigo-500 dark:text-indigo-400'>
                  Already have an account{' '}
                  <Link
                    href='/login'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Sign In
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
