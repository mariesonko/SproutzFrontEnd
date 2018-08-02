import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, TextArea} from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { postPlaydate } from '../actions';
import withAuth from '../hocs/withAuth';


class CreatePlaydates extends Component {
    constructor(){
      super()
      this.state = {
        title: '', eventType: '', date: '',
        startTime: '', endTime: '', spotsAvailable: '', address: '',
        city:'', state:'', zipCode: '', country: '', supervisedBy:'', food:'',
        rating: '', eventFees: '', description: '', imageUrl:''
      }
    }

    handleSubmitPlaydates = (e) => {
      console.log(this.state);
      e.preventDefault;
      const newPlaydate = {
        title: this.state.title,
        eventType: this.state.eventType,
        date: this.state.date,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        spotsAvailable: this.state.spotsAvailable,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        country: this.state.country,
        supervisedBy: this.state.supervisedBy,
        food: this.state.food,
        rating: this.state.rating,
        eventFees: this.state.eventFees,
        description: this.state.description,
        imageUrl: this.state.imageUrl
      }
      // console.log(this.state)
      // console.log(newPlaydate);
      // console.log(this.props);
      this.props.postPlaydate(newPlaydate)
      this.props.history.push('/Events')
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })

    }
     handleChangeDropDown (str) {
       return (e) => {
         this.setState({
             [str]: e.target.innerText
           })
       }
     }

  render() {
    console.log(this.props.current_family);
    const options = [
    { key: 'h', text: 'My house', value: 'myhouse' },
    { key: 'e', text: 'Event', value: 'event' },
    { key: 'o', text: 'Other', value: 'other' }
    ]

    const options2 = this.props.current_family.children ? this.props.current_family.children.map(child => {
      return { key: 'm', text: child.childFirstName, value: child.childFirstName }
    }) : [];

    return (
      <div className='login-form'>

    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: 'auto' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as='h2' color='blue' textAlign='center'>
          <Image src='https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' circular/>
          Create a Playdate
        </Header>
      <Form size='large' onSubmit={this.handleSubmitPlaydates}>
        <Segment stacked>
         <Form.Select onChange={this.handleChangeDropDown('host')} fluid icon='Select Child' iconPosition='left' placeholder='Select Child' name='host' value={this.host} options={options2} />

          <Form.Input onChange={this.handleChange} fluid icon='Event Title' iconPosition='left' placeholder='Event Title' name='title' value={this.state.eventTitle}/>
           <Form.Select  onChange={this.handleChangeDropDown('eventType')} fluid icon='Event Type' iconPosition='left' options={options} placeholder='Event Type' name='eventType' value={this.eventType}/>


           <Form.Input onChange={this.handleChange} fluid icon='Event Starts' iconPosition='left' placeholder='Start Time' name='startTime' value={this.state.startTime}/>
           <Form.Input onChange={this.handleChange} fluid icon='Event Ends' iconPosition='left' placeholder='End Time' name='endTime' value={this.state.endTime}/>

          <Form.Input  onChange={this.handleChange} fluid icon='Spots Available' iconPosition='left' placeholder='Enter number here ....' name='spotsAvailable' value={this.state.spotsAvailable}/>
          <Form.Input  onChange={this.handleChange} fluid icon='Event Fees' iconPosition='left' placeholder='Enter Event Fees here ....' name='eventFees' value={this.state.eventFees}/>

              <Form.Input fluid onChange={this.handleChange} icon='Event Date' iconPosition='left' placeholder='mm/dd/yyyy' name='date' value={this.state.date} />

            <TextArea onChange={this.handleChange} icon='Description' iconPosition='left' placeholder='Description' name='description' value={this.state.description}>Event Description</TextArea>


          <Form.Input onChange={this.handleChange} icon='Address' iconPosition='left' placeholder='Address' name='address' value={this.state.address}/>

          <Form.Input onChange={this.handleChange} icon='City' iconPosition='left' placeholder='City' name='city' value={this.state.city}/>

          <Form.Input onChange={this.handleChange} icon='State' iconPosition='left' placeholder='State' name='state' value={this.state.state}/>

          <Form.Input onChange={this.handleChange} icon='ZipCode' iconPosition='left' placeholder='ZipCode' name='zipCode' value={this.state.zipCode}/>

        <Form.Input fluid onChange={this.handleChange} icon='Country' iconPosition='left' placeholder='country' name='country' value={this.state.country} />


          <Form.Input onChange={this.handleChange} icon='food' iconPosition='left' placeholder='food selection' name='food' value={this.state.food}/>


          <Form.Input onChange={this.handleChange} icon='Event Image' iconPosition='left' placeholder='Enter Image url address here ....' name='imageUrl' value={this.state.imageUrl}/>

            <Form.Input onChange={this.handleChange} icon='Supervised By' iconPosition='left'  placeholder='Enter name here...' name='supervisedBy' value={this.state.supervisedBy} />

            <Form.Input onChange={this.handleChange} icon='rating' iconPosition='left' placeholder='Enter name here...' name='rating' value={this.state.rating} />

           {/* <Form.Input onChange={this.handleChange} icon='Invite Friends for this event' iconPosition='left' placeholder='add friends email here .....' name='guestEmail' value={this.state.guestEmail}/> */}

       {/* <Form.Checkbox onChange={this.handleChangeDropDown} icon='Is this an Overnight Event?' iconPosition='left' name='overnight' value={this.state.overnight}/> */}
        <Button color='blue' fluid size='large' type='submit'>
          Publish
        </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.events.items,
          current_family: state.auth.current_family
  }
}

export default withAuth(connect(mapStateToProps, { postPlaydate })(CreatePlaydates));
