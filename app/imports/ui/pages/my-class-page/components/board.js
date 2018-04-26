import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, Divider, Header, Container, Dropdown} from 'semantic-ui-react';
import './board.css';
export default class Board extends Component {
  render() {
    const courseTitle = "ICS 332"
    const noteTitle = ["CPU", "System"]
    const options = [];
    for (i=0; i<noteTitle.length; i++) {
      options.push({key: noteTitle[i], value: noteTitle[i], text: noteTitle[i] })
    }
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
    return (
      <div className="wraper">
       <Header as='h1' textAlign='center' block> {courseTitle} </Header>
       <Dropdown placeholder='Select topics' fluid multiple selection options={options} />
       <Container>
          <Divider horizontal><Header as='h2'>{noteTitle[0]}</Header></Divider>
          <Card.Group className='cardItem' itemsPerRow={5} items={cpu} />

          <Divider horizontal><Header as='h2'>{noteTitle[1]}</Header></Divider>
          <Card.Group className='cardItem' itemsPerRow={5} items={system} />
       </Container>

      </div>
    );
  }
}
