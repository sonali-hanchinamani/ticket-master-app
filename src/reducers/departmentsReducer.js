const departmentsInitialState = [] 
const departmentsReducer = (state = departmentsInitialState, action) => {
    switch (action.type) {
        case 'ADD_DEPARTMENT' : {
            return [...state, {...action.payload}]
        }
        case 'SET_DEPARTMENTS' : {
            return [...action.payload]
        }
        case 'REMOVE_DEPARTMENT' : {
            return state.filter(dept => dept._id !== action.payload)
        }
        default:{
            // return [].concat(state)
            return [...state]
        }
    }
}

export default departmentsReducer