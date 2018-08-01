import React from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import '../layout/Profile.css';
import { Card, Feed } from 'semantic-ui-react';
import { postLoginInfo } from '../actions/index';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';

class Profile extends React.Component {

  render() {
    console.log(this.props.current_family.id);

    return (
      <div>
        <Card>
     <Card.Content>
       <Card.Header>Welcome </Card.Header>
     </Card.Content>
     <Card.Content>
       <Feed>
         <Feed.Event>
           <Feed.Label image='https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' circular />
           <Feed.Content>
             <Feed.Date content='1 day ago' />
             <Feed.Summary>
               You added <a>Jenny Hess</a> to your <a>coworker</a> group.
             </Feed.Summary>
           </Feed.Content>
         </Feed.Event>
       </Feed>
    </Card.Content>
    </Card>

     </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { current_family: state.auth.current_family }
}

export default withAuth(connect(mapStateToProps, { postLoginInfo })(Profile));
