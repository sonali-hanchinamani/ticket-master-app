import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setDepartments = (departments) => {
    return { 
        type: 'SET_DEPARTMENTS', 
        payload: departments 
    }
}

export const startGetDepartments = () => {
    return (dispatch) => {
        axios.get('/departments', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const departments = response.data 
            dispatch(setDepartments(departments))
        })
    }
}

export const addDepartment = (department) => {
    return { type: 'ADD_DEPARTMENT', payload: department }
}       

export const startAddDepartment = (formData) => {
    return (dispatch) => {
        axios.post('/departments', formData, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')) {
                Swal.fire({
                    title: 'OOPSS!!!',
                    text: 'there was an error while submitting the form', 
                    icon: 'error'
                })
            } else {
                Swal.fire({
                    title: 'Yay!!!', 
                    text: 'department was created successfully',
                    icon: 'success'
                })
                const department = response.data
                dispatch(addDepartment(department))
            } 
        })
    }
}

export const removeDepartment = (id) => {
    return { 
        type: 'REMOVE_DEPARTMENT', 
        payload: id
    }
}

export const startRemoveDepartment = (id) => {
    return (dispatch) => {
        axios.delete(`/departments/${id}`, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            Swal.fire({
                title: 'Deleted',
                text: 'you have successfully deleted the department',
                icon: 'success'
            })
            const department = response.data 
            dispatch(removeDepartment(department._id))
        })
    }
}   


