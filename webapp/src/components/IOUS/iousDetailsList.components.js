import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadLiveContractsNode, loadTerminatedContractsNode} from '../../actions/example.actions'
import MemberListItem from '../memberList.components'
import FlexView from 'react-flexview'
import {Table, Button, Container , Segment} from 'semantic-ui-react'
import {changePageNode, detailsContract, loadIOUSNode} from '../../actions/example.actions'
import ReactJson from 'react-json-view'

class IOUSDetailsList extends Component {
  componentDidMount() {
    this.props.loadIOUSNode(this.props.changeIOUS)
  }

  render () {
    console.log(this.props.changeIOUS)
    console.log("HELLLLO",this.props.changeIOUS)
    console.log("this is the list of IOUS", this.props.listIOUS)
    let listofIOUS;
    if (this.props.listIOUS){
    this.listOfIOUS = [].concat(this.props.listIOUS)
    .map(item => <Table.Row key={item.state.data.contractIdentifier}>
      <Table.Cell>{item.state.data.date}</Table.Cell>
      <Table.Cell> {item.state.data.contractIdentifier} </Table.Cell>
      <Table.Cell>{item.state.data.lender}</Table.Cell>
      <Table.Cell>{item.state.data.borrower}</Table.Cell>
      <Table.Cell>{item.state.data.amount}</Table.Cell>
      <Table.Cell>{item.state.data.paid}</Table.Cell>
    </Table.Row>)}
    else {this.listOfIOUS = []}





    return (
      <FlexView shrink hAlignContent='center'>
        <FlexView hAlignContent='center' shrink>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Identifier</Table.HeaderCell>
            <Table.HeaderCell>Lender</Table.HeaderCell>
            <Table.HeaderCell>Borrower</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Paid</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
        <Table.Body>
            {this.listOfIOUS}
        </Table.Body>
        </Table>
      </FlexView>
      </FlexView>
    )
  }
}

export default withRouter(connect(
  (state) => ({changeIOUS: state.example.example.changeIOUS, name: state.example.example.pageDetailsNode, listIOUS: state.example.example.listIOUS  }),
  {loadLiveContractsNode, detailsContract, loadTerminatedContractsNode, loadIOUSNode}
)(IOUSDetailsList))
