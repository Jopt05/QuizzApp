import React from 'react'
import { Button } from '../Button/Button';
import Styles from './Quizz.module.css';
import { Questions } from '../../data/Questions'
import { useData } from '../../hooks/useData';
import StylesButton from '../Button/Button.module.css'

export const Quizz = () => {

    const [ data, handleCheck, handleRestart ] = useData({
        cursor: 0,
        points: 0,
        finished: false,
        winner: false
    });

    const { cursor, points, winner, finished } = data;

    return (
        <div className={ Styles.Container }>
            
            {
                finished
                ? 
                ( 
                    <>
                        <h2>You have { winner ? 'won!'  : 'lost!' } with { points } points.</h2>
                        <div className={ Styles.ButtonsContainer }>
                            <button className={ StylesButton.Button } onClick={ handleRestart } >Try again?</button>
                        </div>
                    </>
                )
    
                : ( 
                    <>
                        <h2>{ Questions[cursor].question }</h2>
                        <div className={ Styles.ButtonsContainer }>
                            {
                                Questions[cursor].answers.map( (item) =>(
                                    <Button  value={ item } answer={ Questions[cursor].rightAnswer } handleCheck={ handleCheck } />
                                ) )
                            }
                        </div>
                    </>
                )
            }

        </div>
    )
}
