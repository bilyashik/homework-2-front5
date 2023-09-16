import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeInputAction, withParamsAction     } from "../../redux/actions";


function MainPage() {

    const title = useSelector(state => state.titleReducer.title)
    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch(changeTitle())
    }


    const withParams = () => {
        dispatch(withParamsAction('HELLO GEEKS'))
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    )
}

export default MainPage