import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlicer';

const UserComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        console.log(users)
    }, [users])
    
    return (
        <div>
            <h2>List of Users</h2>
        </div>
    )
}

export default UserComponent