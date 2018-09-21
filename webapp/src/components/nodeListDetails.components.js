import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadLiveContractsNode, loadTerminatedContractsNode} from '../actions/example.actions'
import MemberListItem from './memberList.components'
import FlexView from 'react-flexview'
import {Table, Button, Container} from 'semantic-ui-react'
import {changePageNode, detailsContract} from '../actions/example.actions'


class NodeListDetails extends Component {
  componentDidMount() {
    this.props.loadLiveContractsNode(this.props.name)
    this.props.loadTerminatedContractsNode(this.props.name)
  }
  changePageDetails = (e, {id}) => {
    this.props.detailsContract(id)
    this.props.history.push('/contractdetails')
  }
  changePageHistory = (e, {id}) => {
    this.props.detailsContract(id)
    this.props.history.push('/contracthistory')
  }

  render () {
    console.log(this.props.LiveContracts)
    console.log(this.props.TerminatedContracts)
    const listOfMembers = [].concat(this.props.LiveContracts)
    .map(item => <Table.Row key={item.contractIdentifier[0].identifierValue.identifier}>
      <Table.Cell> {item.contractIdentifier[0].identifierValue.identifier} </Table.Cell>
      <Table.Cell>{item.contractIdentifier[0].version}</Table.Cell>
      <Table.Cell><Button id={item.contractIdentifier[0].identifierValue.identifier} onClick={this.changePageDetails}>Details</Button></Table.Cell>
      <Table.Cell><Button id={item.contractIdentifier[0].identifierValue.identifier} onClick={this.changePageHistory}>History</Button></Table.Cell>
    </Table.Row>)
    const listOfTerminatedContract = [].concat(this.props.TerminatedContracts)
    .map(item => <Table.Row key={item.contractIdentifier[0].identifierValue.identifier}>
      <Table.Cell> {item.contractIdentifier[0].identifierValue.identifier} </Table.Cell>
      <Table.Cell>{item.contractIdentifier[0].version}</Table.Cell>
      <Table.Cell><Button id={item.contractIdentifier[0].identifierValue.identifier} onClick={this.changePageDetails}>Details</Button></Table.Cell>
      <Table.Cell><Button id={item.contractIdentifier[0].identifierValue.identifier} onClick={this.changePageHistory}>History</Button></Table.Cell>
    </Table.Row>)




    return (
      <FlexView shrink hAlignContent='center'>
        <FlexView shrink>
        <Container fluid>
          <h3> Live </h3>
      <FlexView shrink hAlignContent='center'>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Identifier</Table.HeaderCell>
            <Table.HeaderCell>Version</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
          </Table.Header>
        <Table.Body>
            {listOfMembers}
        </Table.Body>
        </Table>
      </FlexView>
    </Container>
  </FlexView>
    <FlexView shrink marginLeft={10}>
    <Container fluid>
      <h3> Terminated </h3>
      <FlexView shrink hAlignContent='center'>

        <Table unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Identifier</Table.HeaderCell>
            <Table.HeaderCell>Version</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
          </Table.Header>
        <Table.Body>
            {listOfTerminatedContract}
        </Table.Body>
        </Table>
      </FlexView>
    </Container>
  </FlexView>


    </FlexView>
    )
  }
}

export default withRouter(connect(
  (state) => ({TerminatedContracts: state.example.example.TerminatedContractList, LiveContracts: state.example.example.ContractList, name: state.example.example.pageDetailsNode}),
  {loadLiveContractsNode, detailsContract, loadTerminatedContractsNode}
)(NodeListDetails))
