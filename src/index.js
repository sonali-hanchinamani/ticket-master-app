import React from 'react' 
import ReactDOM from 'react-dom' 
import App from './App' 
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { startSetUser } from './actions/userAction'
import { startSetCustomers } from './actions/customersAction'

const store = configureStore() 
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

// handle page reloads
if(localStorage.getItem('authToken')) {
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))