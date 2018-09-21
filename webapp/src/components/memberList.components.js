import React from 'react'
import {Table, Button} from 'semantic-ui-react'

const MemberListItem = ({name, role, partyIdentityId}) => {
  return (
    <Table.Row key={name}>
      <Table.Cell> {name} </Table.Cell>
      <Table.Cell>{role}</Table.Cell>
      <Table.Cell>{partyIdentityId}</Table.Cell>
      <Table.Cell><Button >Details</Button></Table.Cell>
    </Table.Row>
  )
}

export default (MemberListItem)
