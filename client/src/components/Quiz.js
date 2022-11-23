import React, { useState } from 'react'  //useEffect,
import Questions from './Questions'
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */

import { useSelector, useDispatch } from 'react-redux'
import {Navigate} from 'react-router-dom'

export default function Quiz() {

    const [check, setChecked] = useState(undefined)

   const  result= useSelector(state=>state.result.result);
   const  {queue,trace}= useSelector(state=>state.questions);

   const dispatch= useDispatch()

    
    
    /** Next button event handler */
        function OnNext()
        {
            // console.log('On Next click')
            if(trace<queue.length){
                /**update the trace value by one using moveNextAction */
               dispatch(MoveNextQuestion()); 
               /**insert a new result in the array  */
               if(result.length<=trace){
                     dispatch(PushAnswer(check))
                  }
            }

              /** reset the value of the checked variabe */
              setChecked(undefined)
        }
         /** Prev button event handler */
        function OnPrev()
        {
            // console.log('On Prev click')
            if(trace>0){
                /**update the trace value by one using MovePrevQuestion */
             dispatch(MovePrevQuestion());
            }
            
        }

        function onChecked(check){
            console.log(check)   ///
            setChecked(check)
        }

        /** finished exam afte the last question */
        if(result.length && result.length>=queue.length){
            return <Navigate to={'/result'} replace="true"></Navigate>
        }
    
    return (

        <div className='container'>
            <h1 classname='title text-light'>Quiz Application</h1>

            {/** display ques */}
            <Questions onChecked={onChecked}/>

            <div className='grid'>
            {trace>0 ?  <button className='btn prev' onClick={OnPrev}>Prev</button> : <div></div>}
                
                <button className='btn next' onClick={OnNext}>Next</button>
            </div>
        </div>
    )
}