import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import ImageAnimation from '../modules/ImageAnimation'
import styled from 'styled-components';

const Wrapper = styled.div`
`;


class Home extends Component {

  componentWillMount() {
    this.setState({
      startFirstBoxAnimation: false,
      startSecondBoxAnimation: true,
    });
  }

  render() {

    const {
     startFirstBoxAnimation,
     startSecondBoxAnimation,
   } = this.state;

    return (
      <Wrapper>
        <ImageAnimation
          image={'https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg'}
          width={600}
          height={400}
          noOfRows={8}
          speed={200}
          startAnimation={startFirstBoxAnimation}
          onClick={() => this.setState({ startFirstBoxAnimation: !startFirstBoxAnimation })}
        />
        <ImageAnimation
          image={'https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg'}
          width={`20vw`}
          height={`15vw`}
          noOfRows={4}
          speed={100}
          startAnimation={startSecondBoxAnimation}
          onClick={() => this.setState({ startSecondBoxAnimation: !startSecondBoxAnimation })}
        />
        </Wrapper>
      // {/* <div className='bg'>
      //
      //   {/* 'https://www.culture.ru/storage/images/d822a63a2006694f05787fcde046dc14/946ac219e469a5cb515b1292280373bb.jpg' */}
      // </div> */}
    );
  }
}

export default Home;
