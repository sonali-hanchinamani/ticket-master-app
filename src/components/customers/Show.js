import React from 'react' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { findCustomer } from '../../selectors/customerSelector'
function CustomerShow(props) {
    const { _id, name, email, mobile } = props.customer || {}
    return (
        <div>
            {
                props.customer ? (
                    <div> 
                        <h2>Customer show - {_id} </h2>
                        <p> {name} {mobile} {email}</p>
                        <Link to={`/customers/edit/${_id}`}>edit</Link>
                        <Link to="/customers">back</Link>
                    </div> 
                ) : (
                    <div>
                        loading...
                    </div> 
                )
            }
          
        </div> 
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id 
    return {
        customer: findCustomer(state.customers, id )
    }
}
export default connect(mapStateToProps)(CustomerShow)