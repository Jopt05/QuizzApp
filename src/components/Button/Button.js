import React from 'react'
import { useData } from '../../hooks/useData'
import Styles from './Button.module.css'

export const Button = ({ value, answer, handleCheck }) => {

    return (
        <>
            <button className={ Styles.Button } onClick={ () => handleCheck( value, answer ) } >
                {value}
            </button>
        </>
    )
}
