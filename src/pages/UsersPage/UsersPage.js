import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction } from "../../redux/actions";
import User from "../../components/User";

function UsersPage() {
    const { value, users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value));
    }

    const addUser = () => {
        dispatch(addUserAction(value));
    }

    const deleteAllUsers = () => {
        dispatch(deleteAllUsers);
    }

    return (
        <div>
            <h1>{value}</h1>
            <input type="text" placeholder="name" onChange={changeInput} />
            <button onClick={addUser}>add</button>
            <button onClick={deleteAllUsers}>delete all</button>

            {users.map((user, idx) => <User key={idx} userName={user} />)}
        </div>
    )
}

export default UsersPage;
