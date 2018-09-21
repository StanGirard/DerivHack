import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadLiveContractsNode} from '../../actions/example.actions'
import MemberListItem from '../memberList.components'
import FlexView from 'react-flexview'
import {Table, Button, Container} from 'semantic-ui-react'
import {changePageNode, detailsContract} from '../../actions/example.actions'
import ReactJson from 'react-json-view'

class ContractDetailsTerminatedList extends Component {
  componentDidMount() {
    this.props.loadLiveContractsNode(this.props.name)
  }

  render () {
    console.log(this.props.LiveContracts)
    console.log("HELLLLO",this.props.ContractId)
    const listOfMembers = [].concat(this.props.LiveContracts)
    .filter(it => it.contractIdentifier[0].identifierValue.identifier === this.props.ContractId)




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
  (state) => ({LiveContracts: state.example.example.ContractList, name: state.example.example.pageDetailsNode, ContractId: state.example.example.ContractId }),
  {loadLiveContractsNode, detailsContract}
)(ContractDetailsList))
