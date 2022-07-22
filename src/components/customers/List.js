import React from 'react'
import { Link }  from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetCustomers, startRemoveCustomer } from '../../actions/customersAction'

function CustomerList(props){
    const handleRemove = (id) => {
        const confirmRemove =  window.confirm("Are you sure?")
        if(confirmRemove) {
            props.dispatch(startRemoveCustomer(id))
        }
    }
    if(props.customers.length == 0) {
        props.dispatch(startSetCustomers())
    }
    return (
        <div>
            <h2>Listing Customers - { props.customers.length } </h2>
            <ul>
                { props.customers.map(customer => {
                    return <li key={customer._id}> <Link to={`/customers/${customer._id}`}>{customer.name}</Link>
                        <button onClick={() => {
                            handleRemove(customer._id)
                        }}>remove</button>
                    </li> 
                })}
            </ul>

            <Link to="/customers/new">Add Customer</Link>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps)(CustomerList)
