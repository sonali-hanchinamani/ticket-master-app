import React from 'react' 
import Swal from 'sweetalert2'
import DepartmentForm from './Form'
import { connect } from 'react-redux'
import { startGetDepartments, startRemoveDepartment } from '../../actions/departmentsAction'


function DepartmentList(props){ 
    if(props.departments.length == 0) {
        props.dispatch(startGetDepartments())
    }
    const handleRemove = (id) => {
        // const confirmRemove = window.confirm("Are you sure") 
        // if(confirmRemove) {
        //     props.dispatch(startRemoveDepartment(id))
        // }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                props.dispatch(startRemoveDepartment(id))
            }
        })
    }
    return (
        <div>
            <h2>Listing Deparments - { props.departments.length }</h2>
            <ul>
                { props.departments.map((department) => {
                    return <li key={department._id}>{ department.name}
                    <button onClick={() => {
                        handleRemove(department._id)
                    }}>remove</button>
                    </li>
                })}
            </ul>

            <h2>Add Department</h2>
            <DepartmentForm />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(DepartmentList)