import React from 'react'
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import FlexView from 'react-flexview'

export class NavMenu extends React.Component {

  state = []

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  changePage = (e, {name}) => {
    this.setState({activeItem: name})
    console.log('/', name)
    if (name === 'home')
      this.props.history.push('/')
    else
      this.props.history.push('/' + name)
  }

  render () {
    const {activeItem} = this.state
    return (
    <FlexView width='100%' basis={50} hAlignContent='center' marginTop={10}>
      <Menu size='massive'>
        <Menu.Item name='home'
          activeItem={activeItem === 'home'}
          onClick={this.changePage}>
          Home
        </Menu.Item>
          <Menu.Item name='admin'
            activeItem={activeItem === 'admin'}
            onClick={this.changePage}>
              Admin
            </Menu.Item>
      </Menu>
    </FlexView>

    )
  }
}

export default withRouter(connect(
  (state) => ({}),
  {}
)(NavMenu))
