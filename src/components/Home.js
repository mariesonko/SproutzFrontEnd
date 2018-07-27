import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Image src='https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' size='large' fluid circular/>
      </div>
    );
  }
}

export default Home;
