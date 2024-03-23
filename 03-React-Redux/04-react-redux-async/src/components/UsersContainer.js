import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/AsyncActions';

const UsersContainer = ({userData, fetchUsersData}) => {
    useEffect(() => {
        fetchUsersData();
    }, [fetchUsersData]);
    return (
        <>
            <h2> Users List</h2>

            {
                userData.loading ? (
                    <p> Loading ....</p>
                ) : userData.data?.length ? (
                    userData.data.map(user => <p> {user} </p>)
                ) : userData.error ? (
                    <p> {userData.error} </p>
                ) : <p> Error in loading the names </p>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersData: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);