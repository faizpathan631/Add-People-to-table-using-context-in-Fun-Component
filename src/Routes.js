import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './Add-People-to-table-using-context-in-Fun-Component/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/App'>People in table App</Link>
          </li>
        </ul>
        <hr />
        <Route path='/App' component={App} />
      </div>
    </Router>
  )
}

export default Routing
