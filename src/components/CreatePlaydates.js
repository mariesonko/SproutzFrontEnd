import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';

class CreatePlaydates extends Component {
    constructor(){
      super()
      this.state = {
        host_id: 5, title: '', eventType: '', date: '',
        startTime: '', endTime: '', spotsAvailable: '', address: '',
        city:'', state:'', zipCode: '', country: '', supervisedBy:'', food:'',
        rating: '', eventFees: '', description: '', imageUrl:'', overnight: false
      }
    }

    handleSubmitPlaydates = (e) => {
      e.preventDefault;
    this.setState({
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
      eventFees: this.state.eventFeed,
      description: this.state.description,
      imageUrl: this.state.imageUrl
    })

    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })

    }

    handleChangeDropDown =(e) => {
      this.setState({
        [e.target.name]: e.target.innerText
      })

    }

  render() {

    const options = [
    { key: 'h', text: 'My house', value: 'myhouse' },
    { key: 'e', text: 'Event', value: 'event' },
    { key: 'o', text: 'Other', value: 'other' }
    ]

    const options2 = [
  { key: 'm', text: 'Marius', value: 'Marius' },
  { key: 'f', text: 'Paige', value: 'Paige' },
]
    return (
      <Form onSubmit={this.handleCreatePlaydates}>
        <Form.Group widths={4}>
          <Form.Select onChange={this.handleChangeDropDown} fluid label='Select Child' placeholder='Select Child' name='host' value={this.host} options={options2} />
        </Form.Group>

        <Form.Group widths={4}>
          <Form.Input  onChange={this.handleChange} fluid label='Event Title' placeholder='Event Title' name='eventTitle' value={this.state.eventTitle}/>
           <Form.Select  onChange={this.handleChangeDropDown} fluid label='Event Type' options={options} placeholder='Event Type' name='eventType' value={this.state.eventType}/>
        </Form.Group>
        <Form.Group widths={4}>
           <Form.Input onChange={this.handleChange} fluid label='Event Starts' placeholder='Start Time' name='startTime' value={this.state.startTime}/>
           <Form.Input onChange={this.handleChange} fluid label='Event Ends' placeholder='End Time' name='endTime' value={this.state.endTime}/>
        </Form.Group>

        <Form.Group widths={4}>
          <Form.Input  onChange={this.handleChange} fluid label='Spots Available' placeholder='Enter number here ....' name='spotsAvailable' value={this.state.spotsAvailable}/>
          <Form.Input  onChange={this.handleChange} fluid label='Event Fees' placeholder='Enter Event Fees here ....' name='eventFees' value={this.state.eventFees}/>
            </Form.Group>

          <Form.Group widths={4}>
              <Form.Input fluid onChange={this.handleChange} label='Event Date' placeholder='mm/dd/yyyy' name='date' value={this.state.date} />
            <Form>
              <h5>Event Description</h5>
            <TextArea onChange={this.handleChange} label='Description' placeholder='Description' name='description' value={this.state.description} />
          </Form>
          </Form.Group>
          <Form.Group widths={4}>
              <Form.Input fluid onChange={this.handleChange} label='Country' placeholder='country' name='date' value={this.state.country} />
          </Form.Group>
        <Form.Group widths={2}>
          <Form.Input onChange={this.handleChange} label='Address' placeholder='Address' name='address' value={this.state.address}/>
        </Form.Group>
        <Form.Group widths={4}>
          <Form.Input onChange={this.handleChange} label='City' placeholder='City' name='city' value={this.state.city}/>
          <Form.Input onChange={this.handleChange} label='State' placeholder='State' name='state' value={this.state.state}/>
        </Form.Group>
        <Form.Group widths={4}>
          <Form.Input onChange={this.handleChange} label='ZipCode' placeholder='ZipCode' name='zipCode' value={this.state.zipCode}/>
          <Form.Input onChange={this.handleChange} label='food' placeholder='food selection' name='food' value={this.state.food}/>
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input onChange={this.handleChange} label='Event Image' placeholder='Enter Image url address here ....' name='ImageUrl' value={this.state.imageUrl}/>
        </Form.Group>

          <Form.Group widths={4}>
            <Form.Input onChange={this.handleChange} label='Supervised By' placeholder='Enter name here...'name='supervisedBy' value={this.state.supervisedBy} />
          </Form.Group>
        <Form.Group widths={4}>
           {/* <Form.Input onChange={this.handleChange} label='Invite Friends for this event' placeholder='add friends email here .....' name='guestEmail' value={this.state.guestEmail}/> */} */}
        </Form.Group>
       {/* <Form.Checkbox onChange={this.handleChangeDropDown} label='Is this an Overnight Event?' name='overnight' value={this.state.overnight}/> */}
        <Button type='submit'>Publish</Button>
      </Form>
    );
  }
}

export default CreatePlaydates;
