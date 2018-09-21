import logo from '../../logo.svg'
import React from 'react'
import '../../App.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button, Divider, Segment} from 'semantic-ui-react'
import Notification from '../example.notificationCreation'
import NotificationsSystem from 'reapop'
import FlexView from 'react-flexview'
import theme from 'reapop-theme-wybo'
import ContractHistoryList from './contractHistoryList.components'
import NavMenu from '../Menu/navMenu.components'



const ContractHistory = (props) => {
  const {ContractId} = (props)

  return (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo'/>
      <h1 className='App-title'>DerivHack Natixis Team</h1>
    </header>
    <NavMenu/>
    <NotificationsSystem theme={theme}/>
    <FlexView shrink hAlignContent='center' marginBottom={20} marginTop={10} marginRight={40} marginLeft={40}>
    <Segment color='blue'>
    <h1> History for {ContractId} </h1>
    <FlexView shrink hAlignContent='center' marginBottom={20} >
    <ContractHistoryList/>
    </FlexView>
  </Segment>
</FlexView>


  </div>)
}

export default withRouter(connect(
  (state) => ({ContractId: state.example.example.ContractId
}),
   {}
 )(ContractHistory))
