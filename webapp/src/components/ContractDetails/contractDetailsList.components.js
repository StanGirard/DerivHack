import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadLiveContractsNode, loadTerminatedContractsNode} from '../../actions/example.actions'
import MemberListItem from '../memberList.components'
import FlexView from 'react-flexview'
import {Table, Button, Container} from 'semantic-ui-react'
import {changePageNode, detailsContract} from '../../actions/example.actions'
import ReactJson from 'react-json-view'

class ContractDetailsList extends Component {
  componentDidMount() {
    this.props.loadLiveContractsNode(this.props.name)
    this.props.loadTerminatedContractsNode(this.props.name)
  }

  render () {
    console.log(this.props.LiveContracts)
    console.log("HELLLLO",this.props.ContractId)
    const listOfMembers = [].concat(this.props.LiveContracts).concat(this.props.TerminatedContracts)
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
  (state) => ({TerminatedContracts: state.example.example.TerminatedContractList,LiveContracts: state.example.example.ContractList, name: state.example.example.pageDetailsNode, ContractId: state.example.example.ContractId }),
  {loadLiveContractsNode, detailsContract, loadTerminatedContractsNode}
)(ContractDetailsList))
