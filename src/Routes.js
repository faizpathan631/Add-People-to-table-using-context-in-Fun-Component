import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './Add-People-to-table-using-context-in-Fun-Component/App'
import data from './Add-People-to-table-using-context-in-Fun-Component/Data'
import { Provider } from './Add-People-to-table-using-context-in-Fun-Component/Context'

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
        <Provider value={data}>
          <Route path='/App' component={App} />
        </Provider>
      </div>
    </Router>
  )
}

export default Routing
