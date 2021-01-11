import React from 'react'
import { Header } from './components/Header/Header'
import { Quizz } from './components/Quizz/Quizz'
import './Quizzapp.module.css'

export const QuizzApp = () => {
    return (
        <>
         <Header />
         <Quizz />
        </>
    )
}
