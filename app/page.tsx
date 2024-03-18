'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
export default function Home() {
  const [todos, setTodos] = useState<todo[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [taskDesc, setTaskDesc] = useState<string>('');
  const [editing, setEditing] = useState<todo>();

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  const addTodos = () => {
    const newTodo = {
      id: Math.random(),
      title: taskName,
      description: taskDesc,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTaskName('');
    setTaskDesc('');
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const checkTodo = (id: number) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const updateTodo = () => {
    const newTodos = todos.map((t) => {
      if (t.id === editing?.id) {
        (t.title = taskName), (t.description = taskDesc);
      }
      return t;
    });
    setTodos(newTodos);
    setEditing(undefined);
    setTaskName('');
    setTaskDesc('');
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <main className='flex min-h-screen flex-col items-center p-12'>
      <div className='h-full w-full flex justify-center items-center flex-col space-y-10'>
        <div className='flex flex-col w-full justify-center items-center'>
          {todos.map((todo) => {
            return (
              <div className='flex justify-between items-center w-1/2 min-w-96 my-2 bg-white p-4 bg-opacity-30 rounded-lg shadow-lg border'>
                <div className='flex flex-row space-x-2'>
                  <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => {
                      checkTodo(todo.id);
                    }}
                    className='h-6 w-6'
                  />
                  <div className='flex flex-col'>
                    <div
                      className={`text-xl font-semibold ml-2 ${
                        todo.completed ? 'line-through' : ''
                      }`}
                    >
                      {todo.title}
                    </div>

                    <div className={`text-xl ml-2 text-gray-400`}>
                      {todo.description}
                    </div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <button
                    onClick={() => {
                      setEditing(todo);
                      setTaskName(todo.title);
                      setTaskDesc(todo.description);
                    }}
                    className='bg-blue-600 p-2 rounded hover:bg-red-800 text-white font-bold'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                    className='bg-red-600 p-2 rounded hover:bg-red-800 text-white font-bold'
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className='p-4 w-1/3 flex flex-col space-y-2 text-black'>
          <div>Title</div>
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className='p-4 rounded border border-solid border-gray-800'
          />

          <div>Description</div>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className='p-4 rounded border border-solid border-gray-800'
          />
          <div
            onClick={editing ? updateTodo : addTodos}
            className='px-8 mt-8 py-2.5  self-center relative rounded group text-white font-medium inline-block'
          >
            <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
            <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500'></span>
            <span className='relative'>{editing ? 'Update' : 'Add Task'}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
