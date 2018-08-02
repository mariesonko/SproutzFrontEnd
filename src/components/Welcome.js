import React from 'react';
import { Button, Divider, Dropdown, Grid, Header, Icon, Image,Label,
  Menu, Message, Segment, Table, Input, Form } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postPlaydate } from '../actions';
import withAuth from '../hocs/withAuth';


class Welcome extends React.Component {

  handleChangeDropDown (str) {
    return (e) => {
      this.setState({
          [str]: e.target.innerText
        })
    }
  }


  render() {

    const options2 = this.props.current_family.children ? this.props.current_family.children.map(child => {
      return { key: 'm', text: child.childFirstName, value: child.childFirstName }
    }) : [];

    return (
      <Grid container style={{ padding: '5em 0em' }}>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1' dividing>
          Welcome {this.props.current_family.title} Family!
        </Header>
      </Grid.Column>
    </Grid.Row>

    <br /> <br /><br /> <br />

    <Grid.Row>
      <Grid.Column>
        <Message>
          {/* <Header as='h1'></Header> */}
          <Route render={({ history}) => (
          <Button color='blue' type='submit' onClick={() => { history.push('/CreatePlaydates') }} >Create a Custom Playdate &raquo;</Button> )}/>
        </Message>
      </Grid.Column>
    </Grid.Row>

    <br /> <br /><br /> <br /><br /> <br /><br />

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Search for a Playdate Event</Header>
        <Divider />

        <Header as='h3'>Select Child </Header>
        <Menu vertical>
      <Form.Select onChange={this.handleChangeDropDown('host')} fluid icon='Select Child' iconPosition='left' placeholder='Select Child' name='host' value={this.host} options={options2} />
        </Menu>
        <Header as='h1'>Choose your Selection</Header>
        <Dropdown
          options={[
            { key: 'all', text: 'All', value: 'all' },
            { key: 'kids play', text: 'Kids Play', value: 'kids play' },
            { key: 'activities', text: 'Activities', value: 'activities' },
            { key: 'kids concerts', text: 'Kids Concerts', value: 'kids concerts' }

          ]}
          placeholder='Select'
          selection
        />
        <Menu vertical>
          <Input action='Search' placeholder='Search...' />
        </Menu>
      </Grid.Column>
    </Grid.Row>

    <br /> <br /><br /> <br /><br /> <br /><br />

    <Grid.Row>
      <Grid.Column>
        <Header as='h1'>Events</Header>
        <Divider />

        <Menu vertical>
          <Menu.Item>
            Sproutz <Label>Play Made Easy</Label>
          </Menu.Item>
          <Menu.Item>
            <Route render={({ history}) => (
             <Button type='submit' onClick={() => { history.push('/Events') }}>Add Event</Button> )} />
          </Menu.Item>

        </Menu>
      </Grid.Column>
    </Grid.Row>

  </Grid>
    )
  }
}

{/* <Grid.Row>
  <Grid.Column>
    <Header as='h3'>Thumbnails</Header>
    <Divider />

    <Image size='small' src='/images/wireframe/image.png' />
  </Grid.Column>
</Grid.Row> */}


const mapStateToProps = (state) => {
  return { events: state.events.items,
          current_family: state.auth.current_family
  }
}

export default withAuth(connect(mapStateToProps, { postPlaydate })(Welcome));
