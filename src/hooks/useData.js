import React, { useState } from 'react'

export const useData = ( initialState = [] ) => {

    const [data, setdata] = useState( initialState );

    const { cursor, points, finished, winner } = data; 

    const handleCheck = ( value, answer ) => {
        
        if( cursor < 9 ) {

            ( value === answer )

            ? setdata({
                ...data,
                cursor: cursor + 1,
                points: points + 1
            })

            : setdata({
                ...data,
                cursor: cursor + 1
            });
        } else if ( cursor == 9 ) {

            ( value === answer )

            ? setdata({
                ...data,
                points: points + 1,
                finished: true,
                cursor: 0,
                winner: ( points >= 7 ) ? true : false
            })

            : setdata({
                ...data,
                finished: true,
                cursor: 0,
                winner: ( points >= 7 ) ? true : false
            })

        }

    }

    const handleRestart = () => {
        setdata({
            cursor: 0,
            points: 0,
            finished: false,
            winner: false
        })
    }

    return [data, handleCheck, handleRestart];

}
