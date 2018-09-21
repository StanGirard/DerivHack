import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadContractHistory} from '../../actions/example.actions'
import MemberListItem from '../memberList.components'
import FlexView from 'react-flexview'
import {Table, Button, Container} from 'semantic-ui-react'
import {changePageNode, detailsContract} from '../../actions/example.actions'
import ReactJson from 'react-json-view'

class ContractHistoryList extends Component {
  componentDidMount() {
    this.props.loadContractHistory(this.props.name, this.props.ContractId)
  }

  render () {
    console.log(this.props.ContractHistory)
    console.log("HELLLLO",this.props.ContractId)
    const listOfMembers = [].concat(this.props.ContractHistory)




    return (
      <FlexView shrink hAlignContent='center'>
        <Container textAlign='left' fluid>
        <ReactJson src={listOfMembers} collapsed={2}/>
      </Container>
      </FlexView>
    )
  }
}

export default withRouter(connect(
  (state) => ({ContractHistory: state.example.example.contractHistory, name: state.example.example.pageDetailsNode, ContractId: state.example.example.ContractId }),
  {loadContractHistory, detailsContract}
)(ContractHistoryList))
