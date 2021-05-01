import Web3 from 'web3'
import React from 'react'
import store from './store'
import jwt_decode from 'jwt-decode'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import setAuthToken from './util/setAuthToken'
import Web3Provider, { Connectors } from 'web3-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { setCurrentUser, logoutUser } from './actions/authActions'

import ClientView from './frontend/pages/ClientView'
import Login from '../src/frontend/pages/dashboard/Login'
import Register from '../src/frontend/pages/dashboard/Register'
import Dashboard from '../src/frontend/pages/dashboard/Dashboard'
import PrivateRoute from './private-route/PrivateRoute'

const { InjectedConnector, NetworkOnlyConnector } = Connectors
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

const Infura = new NetworkOnlyConnector({
  providerURL: 'https://mainnet.infura.io/v3/',
})
const connectors = { MetaMask, Infura }

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken
  setAuthToken(token)
  const decoded = jwt_decode(token)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = './login'
  }
}

const App = () => {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName={'web3.js'}
      web3Api={Web3}
    >
      <Provider store={store}>
        <Router>
          <Router>
            <Route path="/" exact component={ClientView} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </Router>
      </Provider>
    </Web3Provider>
  )
}

export default App
