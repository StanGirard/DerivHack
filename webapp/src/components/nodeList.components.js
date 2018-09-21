import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadMembers} from '../actions/example.actions'
import MemberListItem from './memberList.components'
import FlexView from 'react-flexview'
import {Table, Button, Container , Segment} from 'semantic-ui-react'
import {changePageNode, changeIous} from '../actions/example.actions'


class NodeList extends Component {
  componentDidMount() {
    this.props.loadMembers()
  }
  changePage = (e, {id}) => {
    this.props.changePageNode(id)
    this.props.history.push('/node')
  }
  changePageIOUs = (e, {id}) => {
    this.props.changeIous(id)
    this.props.history.push('/iou')
  }

  render () {
    console.log(this.props.members)
    const listOfMembers = [].concat(this.props.members).sort(function(a, b){
 var nameA=a.membershipMetadata.name.toLowerCase(), nameB=b.membershipMetadata.name.toLowerCase();
 if (nameA < nameB) //sort string ascending
  return -1;
 if (nameA > nameB)
  return 1;
 return 0; //default return value (no sorting)
})
    .map(item => <Table.Row key={item.membershipMetadata.name}>
      <Table.Cell> {item.membershipMetadata.name} </Table.Cell>
      <Table.Cell>{item.membershipMetadata.name}</Table.Cell>
      <Table.Cell>{item.membershipMetadata.legalEntityId[0]}</Table.Cell>
      <Table.Cell><Button id={item.membershipMetadata.name} onClick={this.changePage}>Contracts</Button></Table.Cell>
      <Table.Cell><Button id={item.membershipMetadata.name} onClick={this.changePageIOUs}>IOUs</Button></Table.Cell>
    </Table.Row>)




    return (
      <FlexView shrink hAlignContent='center'>
        <FlexView hAlignContent='center' shrink>
        <Segment color='purple'>
        <Container fluid>
        <h2> Node Spy </h2>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>role</Table.HeaderCell>
            <Table.HeaderCell>legalEntityId</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
          </Table.Header>
        <Table.Body>
            {listOfMembers}
        </Table.Body>
        </Table>
      </Container>
    </Segment>
      </FlexView>
      </FlexView>
    )
  }
}

export default withRouter(connect(
  (state) => ({members: state.example.example.members}),
  {loadMembers, changePageNode, changeIous}
)(NodeList))
