import React, { Component } from 'react';
import { render } from 'react-dom';
import { Sidebar, Segment, Card, Divider, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import './theBody.css';
export default class TheBody extends Component {
  state = { activeItem: 'current' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const courseTitle = "332"
      const semester ="Current"
      const noteTitle = ["CPU", "System"]
      const system = [
        { header: 'System 1',},
        { header: 'System 2', },
        { header: 'System 3', }
      ]
      const cpu = [
        {
          header: 'CPU 1',
          description: '',
          meta: '',
        },
        {
          header: 'CPU 2',
          description: '',
          meta: '',
        },
        {
          header: 'CPU 3',
          description: '',
          meta: '',
        },
    ]
    const { activeItem } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} width='thin' visible={true} icon='labeled' vertical inverted>
            <Header as='h1' textAlign='center' block> {courseTitle} </Header>
            <Menu.Item name='current' active={activeItem === 'current'} onClick={this.handleItemClick} />
            <Menu.Item name='fall 2017' active={activeItem === 'fall 2017'} onClick={this.handleItemClick} />
            <Menu.Item name='spring 2017' active={activeItem === 'spring 2017'} onClick={this.handleItemClick} />
            <Menu.Item name='fall 2016' active={activeItem === 'fall 2016'} onClick={this.handleItemClick} />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h2' color='orange'> {semester} </Header>
              <Divider horizontal>{noteTitle[0]}</Divider>
              <Card.Group className='cardItem' itemsPerRow={5} items={cpu} />

              <Divider horizontal>{noteTitle[1]}</Divider>
              <Card.Group className='cardItem' itemsPerRow={5} items={system} />

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
