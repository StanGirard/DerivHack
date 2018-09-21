import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Example from './components/example.components'
import DetailsNode from './components/detailsNode.components'
import ContractDetails from './components/ContractDetails/contractDetails.components'
import ContractHistory from './components/ContractHistory/contractHistory.components'
import Admin from './components/Admin/admin.components'
import IOUSDetails from './components/IOUS/iousDetails.component'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Example} />
            <Route exact path='/node' component={DetailsNode} />
            <Route exact path='/contractdetails' component={ContractDetails}/>
            <Route exact path='/contracthistory' component={ContractHistory}/>
            <Route exact path='/admin' component={Admin}/>
            <Route exact path='/iou' component={IOUSDetails}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
