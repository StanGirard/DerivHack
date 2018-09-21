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
import ContractDetailsList from './contractDetailsList.components'
import NavMenu from '../Menu/navMenu.components'



const ContractDetails = (props) => {
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
    <h1> Details for {ContractId} </h1>
    <FlexView shrink  marginBottom={20} >
    <ContractDetailsList/>
    </FlexView>
  </Segment>
</FlexView>


  </div>)
}

export default withRouter(connect(
  (state) => ({ContractId: state.example.example.ContractId
}),
   {}
 )(ContractDetails))
