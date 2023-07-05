import React, { useState, useEffect, useContext } from 'react';
import { Khazaana } from './Key';
import './style.css';

const Keypad = () => {
  const {
    userPassword,
    inputPassword,
    setInputPassword,
    match,
    setMatch,
    correctGuesses,
    setCorrectGuesses,
  } = useContext(Khazaana);

  function handleKey(e) {
    const newInputPassword = inputPassword + e.target.name;
    setInputPassword(newInputPassword);

    if (newInputPassword === userPassword) {
      setMatch(true);
    }

    if (userPassword.startsWith(newInputPassword)) {
      setCorrectGuesses(newInputPassword.length);
    } else {
      setCorrectGuesses(0);
    }
  }

  useEffect(() => {
    if (inputPassword.length !== userPassword.length) {
      setMatch(false);
    } else {
      setMatch(inputPassword === userPassword);
    }
  }, [inputPassword]);

  return (
    <div className='container'>
      <h1>Unlock the Machine</h1>
      <div className='keypad'>
        <button onClick={handleKey} name='1'>
          1
        </button>
        <button onClick={handleKey} name='5'>
          5
        </button>
        <button onClick={handleKey} name='9'>
          9
        </button>
        <button onClick={handleKey} name='A'>
          A
        </button>
        <button onClick={handleKey} name='S'>
          S
        </button>
        <button onClick={handleKey} name='D'>
          D
        </button>
        <button onClick={handleKey} name='P'>
          P
        </button>
        <button onClick={handleKey} name='7'>
          7
        </button>
        <button onClick={handleKey} name='2'>
          2
        </button>
        <button onClick={handleKey} name='0'>
          0
        </button>
        <button onClick={handleKey} name='4'>
          4
        </button>
        <button onClick={handleKey} name='B'>
          B
        </button>
        <button style={{ width: 'auto' }} onClick={() => setInputPassword('')} className='reset'>
          RESET
        </button>
        <p style={{ backgroundColor: 'black', color: 'white' }}>
          {inputPassword}
        </p>
      </div>
      {match ? (
        <h1>🥳 Welcome To Machine ㊗️</h1>
      ) : inputPassword ? (
        <p style={{ color: 'tomato' }}>Wrong Password, Try Again</p>
      ) : correctGuesses > 0 ? (
        <p style={{ color: 'green' }}>Keep Going! {correctGuesses} correct guesses so far</p>
      ) : null}
    </div>
  );
};

export default Keypad;
