import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../../actions/userAction'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            password: this.state.password,
            email: this.state.email
        }
        const redirect = () => this.props.history.push('/')
        this.props.dispatch(startLogin(formData, redirect))
    }

    render() {
        return (
            <div>
                <h2>Login with us</h2>
                <form onSubmit={this.handleSubmit}>
                  
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /> <br />

                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }
}

export default connect()(Login)