import React, { createContext, useState } from 'react'

export const Khazaana=createContext();

const Key = ({children}) => {
    const userPassword="AS79D04B";

    const [inputPassword,setInputPassword]=useState("");
    const [match,setMatch]=useState(false);
    const [correctGuesses,setCorrectGuesses]=useState('')

    const imporantHooks={
        userPassword,
        inputPassword,
        setInputPassword,
        match,
        setMatch,
        correctGuesses,
        setCorrectGuesses
    };

  return (
    <Khazaana.Provider value={imporantHooks}>
        {children}
    </Khazaana.Provider>
  )
}

export default Key






