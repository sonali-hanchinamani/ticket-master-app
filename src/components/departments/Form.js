import React from 'react' 
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { startAddDepartment } from '../../actions/departmentsAction'

class DepartmentForm extends React.Component {
    constructor() {
        super() 
        this.state = {
            name : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            name: this.state.name 
        }
        this.props.dispatch(startAddDepartment(formData))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Name </label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    <input type='submit' value="submit" />
                </form>
            </div>
        )
    }
}

export default connect()(DepartmentForm)