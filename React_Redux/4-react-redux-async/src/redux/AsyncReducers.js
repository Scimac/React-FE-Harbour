const InitialState = {
    loading : false,
    data : [],
    error : ''
}

const asyncReducer = (state=InitialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            state = {
                ...state,
                loading : true
            }
            return state

        case 'FETCH_USERS_SUCCESS':
            state = {
                ...state,
                loading : false,
                data : action.payload
            }
            return state

        case 'FETCH_USERS_ERROR':
            state = {
                ...state,
                loading : false,
                data : action.payload
            }
            return state
    
        default:
            return state;
    }
} 

export default asyncReducer;