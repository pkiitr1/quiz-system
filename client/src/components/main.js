import '../styles/main.css';
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch=useDispatch()

    function startQuiz(){
        if(inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value))
        }
    }
    return (
        <div className='container'>
            <h1 classname='title text-light'>Quiz Application</h1>

            <ol>
                <li>You will be asked 10 questions consecutively.</li>
                <li>10 points is awarded for the correct answer</li>
                <li>Each question has three option. you can choose only one</li>
                <li>you can review and change the answers before the quiz finishes</li>
                <li>The result will be declared at the end of the quiz</li>
                <li>The quiz starts for everyone at difficulty level 5</li>
            </ol>
            <form id="form">
              <input ref={inputRef} type="text" placeholder='Username*' />
            </form>

            <div className='start'>
                
            </div>
            <Link className='btn btn-default' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>

        </div>
    )
}