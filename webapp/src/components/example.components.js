import logo from '../logo.svg'
import React from 'react'
import '../App.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button, Divider, Segment} from 'semantic-ui-react'
import {exampleConstants} from '../actions/example.actions'
import FileUpload from './fileupload.components'
import Notification from './example.notificationCreation'
import NotificationsSystem from 'reapop'
import FlexView from 'react-flexview'
import ReactJson from 'react-json-view'
import NodeList from './nodeList.components'
// 2. import reapop theme
import theme from 'reapop-theme-wybo'
import NavMenu from './Menu/navMenu.components'

const Example = (props) => {
  const {text, exampleConstants} = (props)
  const handleButtonClick = () => {
    if (text === undefined) {
      exampleConstants('We are going to Win !!!')
    } else {
      exampleConstants(undefined);
    }
  }
  //<FlexView shrink hAlignContent='center' marginBottom={20}>
  //  <Segment color='green'>
  //    <ReactJson src={todos}></ReactJson>
  //  </Segment>
  //</FlexView>

  return (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo'/>
      <h1 className='App-title'>DerivHack Natixis Team</h1>
    </header>
    <NavMenu/>
    <NotificationsSystem theme={theme}/>
    <FlexView shrink hAlignContent='center' marginBottom={20} marginTop={10} >
    <NodeList/>
  </FlexView>

  </div>)
}

export default withRouter(connect((state) => ({text: state.example.example.text}), {exampleConstants})(Example))
