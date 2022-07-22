import React from 'react' 
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { startLogout } from './actions/userAction'

import QuickLinks from './components/navigation/QuickLinks'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Account from './components/auth/Account'

import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show'
import CustomerNew from './components/customers/New'
import CustomerEdit from './components/customers/Edit'

import DepartmentList from './components/departments/List'

function App(props){ 
    console.log('app', props)
    const handleLogout = () => {
        props.dispatch(startLogout())
    }
    return (
        <BrowserRouter>
        <div>
            <h1>Ticket Master</h1>
            <Link to="/">Home</Link>
            {
                Object.keys(props.user).length == 0 ? (
                    <div>
                            <Link to="/users/login">Login</Link>
                            <Link to="/users/register">Register</Link>
                    </div> 
                ) : (
                    <div>
                        <Link to="/customers">Customers</Link>
                        <Link to="/departments">Departments</Link>
                        <Link to="/users/account">account</Link>
                        <Link to="#" onClick={() => {
                            handleLogout()
                        }}>logout</Link>
                    </div> 
                )
            }
           

            <QuickLinks />
            <Switch>
                <Route path="/users/register" component={Register} />
                <Route path="/users/login" component ={Login} />
                <Route path="/users/account" component={Account} />

                <Route path="/customers" component={CustomerList} exact={true}  />
                <Route path="/customers/new" component={CustomerNew} />
                <Route path="/customers/edit/:id" component={CustomerEdit} />
                <Route path="/customers/:id" component={CustomerShow} />

                <Route path="/departments" component={DepartmentList} exact={true} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return { 
        user: state.user 
    }
}
export default connect(mapStateToProps)(App)